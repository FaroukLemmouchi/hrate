import os

class Config:
    """
    Base configuration class.
    """
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_secret_key_here')
    DATABASE_URI = os.environ.get('DATABASE_URI', 'sqlite:///example.db')

class DevelopmentConfig(Config):
    """
    Development configuration class.
    """
    DEBUG = True
    TESTING = True
    DATABASE_URI = 'sqlite:///development.db'

class ProductionConfig(Config):
    """
    Production configuration class.
    """
    SECRET_KEY = os.environ.get('SECRET_KEY')
    DATABASE_URI = os.environ.get('DATABASE_URI')

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}

