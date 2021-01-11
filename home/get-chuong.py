import bs4
import pandas
import requests

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-trinh/lop-12/toan-hoc/'


def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)

list_bai = soup.findAll('a', class_="btn btn-href-organce")

list_link = []
index = 1
for item in list_bai:
	list_link.append(item['href'])
	if(index == 4):
		break
	index +=1
indexs = 1
for link in list_link:
	soup = get_page_content(link)
	urls = soup.findAll('h3', class_="item-title")
	links = [url.find('a')['href'] for url in urls]
	index = 1
	#print("path('toan12/chuong"+str(indexs)+"/',views.toan12_chuong" + str(indexs) + "),")
	print("def toan12_chuong"+str(indexs) + "(request):\n\treturn render(request, 'pages/lop12/chuong"+str(indexs)+"/index.html')\n")
	for url_bai in links:
	    # soup1 = get_page_content(str(url_bai))
	    # title = soup1.find('h1', class_='cate-h1').text #tên của bài học
	    # detail = soup1.find('div', class_="box-content")# mô tả
	    # content1 = soup1.findAll('div', class_="box-1")[2]
	    # content2 =  soup1.findAll('div', class_="box-1")[3]# nội dung
	    # content = str(content1) + "\n" + str(content2)
	    # bai = "<section class=\"wrapbanner\"><div class=\"container\"><h1 class=\"cate-h1\">" + str(title) + "</h1></div></section>" #add tên bài trong html
	    # noidung = "<section class=\"main\"><div class=\"container\"><div class=\"detail-col-left\"><div class=\"box-1\">" + str(detail) + "</div>" + str(content) + "</div></div></section>"# add nội dung vào html
	    # extend  = "{% extends \"pages/lop12/chuong"+str(indexs)+"/base-lop12-chuong"+str(indexs)+".html\" %}"#extend của django
	    # titles = "{% block title %}"+title+"{% endblock %}"#title trong django
	    # block_content = "{% block content %}\n{% verbatim %}\n" + bai + "\n" + noidung +"\n{% endverbatim %}\n{% endblock %}"
	    # tenbai = "bai (" + str(index) + ")" 
		
	    # try:
	    #     f = open("templates/pages/lop12/chuong"+ str(indexs) +"/"+ tenbai +".html", mode='w', encoding='utf-8')
	    #     f.write(extend + "\n" + titles + "\n" + block_content)        
	    # finally:
	    #     f.close()
		if(index == len(links)):
			bai1 = "_ontap"
			bai2 = "/ontap/"
		else:
			bai1 = "_bai"+str(index)
			bai2 = "/bai"+str(index)+"/"

		define="def toan12_chuong"+str(indexs)+ bai1 + "(request):\n\treturn render(request, 'pages/lop12/chuong"+str(indexs)+"/bai ("+ str(index) +").html')\n"
		path = "path('toan12/chuong"+str(indexs)+bai2 +"',views.toan12_chuong"+str(indexs)+ bai1 +"),"
		#print(path)
		index +=1
	indexs +=1




#tao file index cho moi chuong
# index=1
# for link in list_link:
# 	soup = get_page_content(link)
# 	list_bai = soup.findAll('ul', class_="list-content-chuong")
# 	chuong_name = soup.find('h1',class_="cate-h1")
# 	#print(list_bai[0])
# 	f = open("templates/pages/index-base.html",mode='r',encoding='utf-8')
# 	string = f.read().split('<!--content-->')
# 	html = string[0] + str(list_bai[0]) + string[1]
# 	f.close() 
# 	f = open("templates/pages/lop12/chuong"+ str(index) +"/index.html",mode= "w",encoding="utf-8") 
# 	f.write(html.replace("<!--chuong-->",chuong_name.text).replace("Toán 12 Chương 1","Toán 12 Chương " + str(index)))
# 	# ketqua = f.read() 
# 	f.close()
# 	index +=1


# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]


