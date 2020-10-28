# Basic Python App connected to Electron

This application is a Desktop Application that uses ElectronJS (and by extension HTML, JavaScript and CSS) as a frontend for a python application.

Note: this is the base template, which you should be able to modify to add your project files and work with your database.

## Dependencies

- Python
- NodeJS
- electron.js
- python-shell

## Specific Dependencies

- weather module:
- requests
- beautifulsoup4 (to make external requests you will not need this it is just used for the example)

## Get Started
Clone the repository (with git clone like we practiced)

```sh
  cd electron-app-with-python-gui
  pip install -r requirements.txt
  npm install
  npm start
```

## Activate virtualenv - from the gui folder

```sh
pipenv shell

# Trouble shooting - may have to do these
pip install pipenv

pipenv install requests
pip install lxml
pip install sqlalchemy
```

Once everything is working you should be able to run the project with (from the gui folder)

```sh
npm start
```

useful link to docs for SQLAlchemy in Flask:
https://flask.palletsprojects.com/en/1.1.x/patterns/sqlalchemy/

Other useful links:
https://www.w3schools.com/js/js_json_html.asp
https://ourcodeworld.com/articles/read/202/how-to-include-and-use-jquery-in-electron-framework
https://getbootstrap.com/docs/4.0/content/tables/
https://flask.palletsprojects.com/en/1.1.x/patterns/sqlalchemy/
