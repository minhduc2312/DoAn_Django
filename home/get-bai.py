import bs4
import pandas
import requests

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-1-menh-de-tap-hop-ct52.html'

def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)
urls = soup.findAll('h3', class_="item-title")
link = [url.find('a')['href'] for url in urls]
index = 1
for url_bai in link:
    soup1 = get_page_content(str(url_bai))
    title = soup1.find('h1', class_='cate-h1').text #tên của bài học
    detail = soup1.find('div', class_="box-content")# mô tả
    content1 = soup1.findAll('div', class_="box-1")[2]
    content2 =  soup1.findAll('div', class_="box-1")[3]# nội dung
    content = str(content1) + "\n" + str(content2)
    bai = "<section class=\"wrapbanner\"><div class=\"container\"><h1 class=\"cate-h1\">" + str(title) + "</h1></div></section>" #add tên bài trong html
    noidung = "<section class=\"main\"><div class=\"container\"><div class=\"detail-col-left\"><div class=\"box-1\">" + str(detail) + "</div>" + str(content) + "</div></div></section>"# add nội dung vào html
    extend  = "{% extends \"pages/lop10/chuong1/base-lop10-chuong1.html\" %}"#extend của django
    titles = "{% block title %}"+title+"{% endblock %}"#title trong django
    block_content = "{% block content %}\n{% verbatim %}\n" + bai + "\n" + noidung +"\n{% endverbatim %}\n{% endblock %}"
    size = "https://hoc247.net/toan-10/"
    tenbai = "bai (" + str(index) + ")" 
    index +=1
    try:
        f = open("templates/pages/lop10/chuong1/"+ tenbai +".html", mode='w', encoding='utf-8')
        f.write(extend + "\n" + titles + "\n" + block_content)        
    finally:
        f.close()




# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]

# try:
#     f = open("base.txt", mode='r', encoding='utf-8')
#     f1 = open("test.txt", mode='w', encoding='utf-8')
#     data = f.read()
#     f1.write(data)
#     index = str(data).index("noidung-->")
#     f1.seek(index + 26)
#     f1.write("Hello\n")
# finally:
#     f.close()
#     f1.close()
