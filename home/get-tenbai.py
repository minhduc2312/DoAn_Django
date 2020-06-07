import bs4
import pandas
import requests

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-trinh/lop-9/toan-hoc/'


def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)

get_div = soup.findAll('div', class_ = "i-col-2 col-inline-block")[3]
list_a = get_div.findAll('a')
list_bai = [item.text for item in list_a]
for bai in list_bai:
	li_tag = "<li><a href=\"#bai\">"+ bai[1:len(bai)] +"</a></li>"
	print(li_tag)

# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]


