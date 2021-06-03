import os
import glob

# for each file in src that has .ts
# read first line
# if first line == "// Stefenie Pickston 1506427"
# once we hit a false - FAIL

flag = True
count = 0
total = 0

for folder, dirs, files in os.walk('./src'):
    for file in files:
        if os.path.splitext(file.lower())[1].lower() == '.ts':
            #print(file)
        #if file.lower().endswith(".tsx"): # sum ting wong
            with open(os.path.join(folder, file), 'r', encoding='utf-8') as f:
                #print(file)
                total += 1
                line = f.readline()
                # print(line)
                if line != '// Stefenie Pickston 1506427\n':
                    #print('FAIL ' + file)
                    flag = False
                else:
                    count += 1

if flag == True:
    #print('PASS')
    print(1)
else:
	print(0)
#print( count, 'out of' , total, 'passed')
#print(total)