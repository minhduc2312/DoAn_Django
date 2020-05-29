for i in range(7,10):
	for j in range(1,5):
		f = open("templates/pages/lop"+str(i)+"/chuong"+str(j)+"/index.html",mode='r+', encoding='utf-8')
		string = f.read()
		f.close()
		f = open("templates/pages/lop"+str(i)+"/chuong"+str(j)+"/index.html", mode='w+', encoding='utf-8')
		    # f.write(extend + "\n" + titles + "\n" + block_content)
		arr = string.split('</section>')
		if j==1: 
			btn1= "<a href=\"/toan"+(str(i-1))+"/chuong"+(str(j+3))+"\" class=\"previous\">&laquo; Previous</a>\n"
			btn2 = "<a href=\"/toan"+str(i)+"/chuong"+(str(j+1))+"\" class=\"next\">Next &raquo;</a>\n"
		if j == 4:
			btn1= "<a href=\"/toan"+(str(i))+"/chuong"+(str(j-1))+"\" class=\"previous\">&laquo; Previous</a>\n"
			btn2 = "<a href=\"/toan"+str(i+1)+"/chuong"+(str(j-3))+"\" class=\"next\">Next &raquo;</a>\n"
		else:
			btn1= "<a href=\"/toan"+str(i)+"/chuong"+(str(j-1))+"\" class=\"previous\">&laquo; Previous</a>\n"
			btn2 = "<a href=\"/toan"+str(i)+"/chuong"+(str(j+1))+"\" class=\"next\">Next &raquo;</a>\n"

		text= "<div id=\"pre-next\"> \n " +btn1 + btn2+ "</div>\n</section>"

		if len(arr) > 0 :
			# f.write(arr[0] + text + arr[1])  
			str(f.read()).replace(text,'')     
		f.close()
