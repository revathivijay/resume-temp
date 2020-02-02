import pandas as pd
import numpy as np
reference_skills = pd.read_csv('Skills.csv')
candidate_skills = pd.read_csv('info.csv')

category = "Web Developer"
unique_candidates = len(list(candidate_skills['name'].unique()))

reqd = list(reference_skills[category])
# for i in range(len(reqd)):
    # if(np.isnan(reqd[i])):
    #     continue
    # reqd[i]=reqd[i].lower()

print(reqd)
perc={}
for i in range(len(candidate_skills)):
    perc[candidate_skills['name'][i]]=0
    if not candidate_skills['skills'][i].islower():
        candidate_skills['skills'][i] = candidate_skills['skills'][i].lower()

print(candidate_skills['skills'])
for i in range(len(candidate_skills)):
    if any(candidate_skills['skills'][i] in s for s in reqd):
        print(candidate_skills['skills'][i])
        perc[candidate_skills['name'][i]]+=1
total = len(reqd)
for key, value in perc.items():
    perc[key] = float(value/total*100)

import operator
sorted_perc = sorted(perc.items(), key=operator.itemgetter(1), reverse=True)
print(sorted_perc)