from setuptools import setup, find_packages

app_name = "heart rate"

setup(
    name=app_name,
    version="1.0.0",
    description="A heart rate monitor for PolarH10 belt device.",
    author="Farouk Lemmouchi",
    author_email="farouklem@gmail.com",
    packages=find_packages(),  # Automatically find packages
    #include_package_data=True,  # Include data files from packages
    install_requires=[
        "Flask",  # Add other dependencies here
    ],
)

