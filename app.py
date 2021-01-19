import json
import time
num = 0
while True:
  try:
    with open('hello.json') as f:
      data = json.load(f)
    sending = {"Name" : "Neil", "Number": num, "Send" : 0}
    if data["Send"] == 1:
      print("wohoo")
      with open('hello.json', 'w') as json_file:
        json.dump(sending, json_file)
      num+=1
  except:
    continue
  
