import json
import os

data = json.load(open('package.json'))

data=data["dependencies"]

for i in data:
	print("Do you want to install ",i," globally or locally(g/l)")
	inp=input()
	inp=inp.lower()
	if(inp=="g"):
		os.system("npm -g install " + i)
	else:
		os.system("npm install " + i)

	