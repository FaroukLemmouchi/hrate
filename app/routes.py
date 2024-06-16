from flask import Blueprint, render_template, redirect, url_for

main = Blueprint('main', __name__)

@main.route('/measure')
@main.route('/index')
def index():
    return render_template('index.html')

@main.route('/home')
@main.route('/')
def home():
    return render_template('home.html')
