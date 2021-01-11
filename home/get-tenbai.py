import bs4
import pandas
import requests
import os

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-trinh/lop-11/toan-hoc/'


def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)
get_chuong = soup.findAll('h2', class_="i-title")
get_div = soup.findAll('div', class_ = "box-inline-block")
#list_a = get_div.findAll('a')
#list_bai = [item.text for item in list_a]
grade = "<p>Toán lớp 11</p>"
index = 1
print(get_chuong[0].text)
# for chuong in get_chuong:
# 	chuong_name = "<li class=\"active\"><a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">"+ chuong.text +"</a><ul class=\"collapse list-unstyled show\" id=\"homeSubmenu\">"
# 	li_tag = ""
# 	#os.remove("templates/pages/lop11/chuong"+ str(index) +"/base-lop10-chuong"+str(index)+".html")

# 	for bai in list_bai:	
# 		li_tag += "<li><a href=\"#bai\">"+ bai[1:len(bai)] +"</a></li>"
# 		content = grade + "\n\t" +chuong_name+ li_tag + "</ul><li> <a href=\"/giaitoan\">Giải toán</a></li></li>"
# 		print(content)
		# f = open("templates/pages/chuong-base.html",mode='r',encoding='utf-8')
		# string = f.read().split('<!--content-->')
		# html = string[0] + content + string[1]
		# f.close() 
		# f = open("templates/pages/lop11/chuong"+ str(index) +"/base-lop11-chuong"+str(index)+".html",mode= "w",encoding="utf-8") 
		# f.write(html)
		# # ketqua = f.read() 
		# f.close()	
	# if(index == 5):
	# 	break
	# index +=1


# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]


