def factorial(num):
	total=1
	if num>0:
		for i in range(1,num+1):
			total= i*total
		return total
	elif num==0:
		return 1
	else:
		return "not valid input"
	
#print(factorial(8))