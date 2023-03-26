from itertools import permutations

answer = 0

nr = int(input())

numbers = []

for i in range(0, nr):
    numbers.append(int(input()))
    
for i in range(2, nr):
    perm = permutations(numbers, i)
    
    for j in set(perm):
        if j[0] == j[-1]:
            print(j)
            answer += 1

print(answer)