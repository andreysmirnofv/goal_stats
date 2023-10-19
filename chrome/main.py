from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time, json, sys


db_json = '../assets/db/db.json'
country_json = "../assets/db/country/country.json"
goals_json = "../assets/db/goals/goals.json"

def initialize_driver():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--start-maximized")
    options.add_argument("--disable-gpu")
    options.add_argument("--disable-notifications")
    options.add_argument("--disable-infobars")
    options.add_argument("--no-sandbox")

    driver = webdriver.Chrome(service=Service(
        ChromeDriverManager().install(), service=Service('./chromedriver')))
    return driver

def click_button(driver, xpath):
    button = driver.find_element(By.XPATH, xpath)
    button.click()
    time.sleep(15)

def main():
    driver = initialize_driver()
    try:
        driver.get("https://sofascore.com")
        time.sleep(10)
        if driver.find_element(By.XPATH, "/html/body/div[4]/div[2]/div[1]/div[2]/div[2]/button[1]"):
            button = driver.find_element(By.XPATH, "/html/body/div[4]/div[2]/div[1]/div[2]/div[2]/button[1]")
            button.click()
            time.sleep(5)
        else: 
            select_country(driver)
    except Exception as e:
        print(f"An error occurred with link: {str(e)}")
    finally:
        driver.quit()

def select_country(driver):
    with open(country_json, 'r') as file:
        data = json.load(file)

    country_names = [item['country'] for item in data]
    data_str = ', '.join(country_names)

    search_input = driver.find_element(
        By.XPATH, "/html/body/div[1]/header/div[1]/div/div/div[2]/div/form/input")
    search_input.send_keys(data_str)

    time.sleep(5)
    click_button(
        driver, "/html/body/div[1]/header/div[1]/div/div/div[2]/div/div/div/div[1]/div[2]/a/div")
    select_league(driver)


def select_league(driver):
    with open(db_json, 'r', encoding='utf-8') as file:
        league_data = json.load(file)
        
    league_names = [item['league'] for item in league_data]
    
    elements = driver.find_elements(By.CLASS_NAME, 'hYUNa')
    
    for element in elements:
        element_text = element.text
        if element_text in league_names:
            element.click()
            find_team(driver)

def find_team(driver):
    with open(db_json, 'r', encoding='utf-8') as file:
        team_data = json.load(file)

    find_first_team = driver.find_element(
        By.XPATH, '/html/body/div[1]/main/div[2]/div/div/2/div[1]/div[3]/div/div[2]/div[1]/div/div[2]/div[9]/a/div/div/div[4]/div/div[1]/div[2]/bdi')
    find_second_team = driver.find_element(
        By.XPATH, '/html/body/div/[1]/main/div[2]/div/div/2/div[1]/div[3]/div/div[2]/div[1]/div/div[2]/div[9]/a/div/div/div[4]/div/div[1]/div[1]/bdi')

    find_first_team_name = find_first_team.text
    find_second_team_name = find_second_team.text

    team_entry = {
        'first_team_name': find_first_team_name,
        'second_team_name': find_second_team_name
    }

    team_data.append(team_entry)

    with open(db_json, 'w', encoding='utf-8') as file:
        json.dump(team_data, file, ensure_ascii=False, indent=4)

    find_text(driver, team_data)

def find_text(driver, data):
    goals_probly = []
    with open(country_json, 'r', encoding='utf-8') as file:
        country_data = json.load(file)

    country_names = [item['country'] for item in country_data]
    data_str = ', '.join(country_names)
    
    try:
        for item in data:
            first_team_name = item.get('first_team_name')
            second_team_name = item.get('second_team_name')

            if data_str in first_team_name or data_str in second_team_name:
                message = f"{data_str}" if data_str in first_team_name or f"{data_str}" in second_team_name else f"{data_str} не был найден"
                time.sleep(10)
                xpath_expression = f"//*[contains(text(), '{message}')]"
                wait = WebDriverWait(driver, 10)
                first_country_team = wait.until(
                    EC.presence_of_element_located((By.XPATH, xpath_expression)))
                text = first_country_team.text

                goals_probly.append(text)
        total_goals = parse_goals(goals_probly)
        save_goals_to_json(total_goals)
    except Exception as e:
        print(
            f"Элемент с текстом '{message}' не был найден на сайте. Ошибка: {str(e)}")

def parse_goals(driver):
    try:

        elements = driver.find_elements(
            By.XPATH, "//div[contains(@class, 'sc-fqkvVR dOBKtv')]//child::*")

        total_goals = 0 
        country_name = None

        for element in elements:
            if element.tag_name == "bdi" and element.text == "Germany":
                country_name = element.text

            elif element.tag_name == "span" and element.text.isdigit():
                goals = int(element.text) 
                total_goals += goals 
            get_previous_page(driver)
        
        country_data = {
            "country": country_name,
            "goals": total_goals
        }

        with open(db_json, 'w', encoding='utf-8') as json_file:
            json.dump(country_data, json_file, indent=4, ensure_ascii=False)

    except Exception as e:
        print(f"An error occurred: {str(e)}")


def save_goals_to_json(country, total_goals):
    
    country_data = {"country2": country, "goals2": total_goals}
    with open(db_json, encoding='utf-8') as file:
        json.dump(country_data, file, indent=4, ensure_ascii=False)

def get_previous_page(driver):
    try:
        prev_page_button = driver.find_element(
            By.XPATH, "/html/body/div[1]/main/div[2]/div/div/2/div[1]/div[3]/div/div[2]/div[1]/div/div[1]/div[1]/button")
        prev_page_button.click()
        time.sleep(7)
        parse_goals(driver)
        time.sleep(7)
    except Exception as e:
        driver.quit()
        sys.exit()

if __name__ == "__main__":
    main()