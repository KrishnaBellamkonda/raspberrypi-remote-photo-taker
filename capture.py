# This python script is used to capture images  

# Trial Version takes in random photos from web and 
# saves them here 
#import requests
import os
import json 
from picamera import PiCamera
from time import sleep

# Constants
# URL  = "https://picsum.photos/200"
image_base_name = "image_"
image_extension = ".jpg"
json_path = os.path.join(os.getcwd(), 'public', 'image_path.json')

camera = PiCamera()
camera.rotation = 180
camera.start_preview()

sleep(2)

# Utility 
def find_max_number(dir_list):
    numbers_list = [string.replace(image_base_name, "").replace(image_extension, "") for string in dir_list]
    numbers = [int(string) for string in numbers_list]
    return max(numbers)+1

folder_path = os.path.join(os.getcwd(), "public", "images")
files = os.listdir(folder_path)
if(files):
    max_value = find_max_number(files)
    file_name = image_base_name+str(max_value)+image_extension
else:
    file_name= image_base_name+str(0)+image_extension

# File Path
file_path = os.path.join(folder_path, file_name)
camera.capture(file_path)
camera.stop_preview()

# Get URL picture
# res = requests.get(URL)
# with open(file_path, "wb") as fp:
#     fp.write(res.content)

with open(json_path, "w") as fp:
    obj = {"path":"images/"+file_name}
    json.dump(obj, fp)

print(file_path)

