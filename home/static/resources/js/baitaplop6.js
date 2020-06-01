//Viết tập hợp các chữ với từ được đưa vào
function tapHopChuCai(){
    var kq= document.getElementById("cumtu").value;
    //xóa khoảng trắng
    var mangtu = kq.split(" ");
    var kq ="";
    for(i = 0; i < mangtu.length; i++)
    kq += mangtu[i];
    var arr= kq.split('');
    //Loại bỏ ký tự trùng nhau
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    document.getElementById("kq_cumtu").innerHTML= arr;
}
//Tìm số tự nhiên liền sau/ liền trước
function timSoLienST(){
    var liensau= document.getElementById("liensau").value;
    var lientruoc=document.getElementById("lientruoc").value;
    var kq_ls= parseInt(liensau)+1;
    var kq_lt= parseInt(lientruoc)-1;
    document.getElementById("tim_ls").innerHTML=kq_ls;
    document.getElementById("tim_lt").innerHTML=kq_lt;
}
//Viết tập hợp bằng cách liệt kê các phần tử
//Input : 1 <= x <5 Output 1, 2, 3, 4
function timTHSo(){
    var dieukien= document.getElementById("tim_thso").value;
    var arr=dieukien.split('<');
    var dau= parseInt(arr[0]);
    var cuoi= parseInt(arr[2]);
    var th="";
    if(dau>cuoi)
        kq+="Nhập khoảng giá trị sai."
    else{
        for(var i=dau+1;i<cuoi;i++)
            th+= i.toString()+ ", ";
    }
    document.getElementById("kq_thso").innerHTML= "A = {"+th.substring(0, th.length - 1)+"}";
}

//Đếm số phần tử
function demSoPhanTuTapHop(){
    var taphop= document.getElementById("phantu").value;
    var arr= taphop.split(',');
    document.getElementById("dem_th").innerHTML=arr.length;
}
//Hàm chuyển số sang chữ số La mã
function convertToRoman() {
  var num = document.getElementById("num").value;
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }
  document.getElementById("lama").innerHTML = str;
}

//Bài 3. Hàm chuyển chữ số La mã sang số
//Hàm giá trị các chữ 
function valuerRoman(char) {
  if(char == 'I' || char == 'i') 
      return 1;
  if(char == 'V' || char == 'v') 
      return 5;
  if(char == 'X' || char == 'x') 
      return 10;
  if(char == 'L' || char == 'l') 
      return 50;
  if(char == 'C' || char == 'c') 
      return 100;
  if(char == 'D' || char == 'd') 
      return 500;
  if(char == 'M' || char == 'm') 
      return 1000;

  return -1;
}
function RomanToDec() {
  var str = document.getElementById("lm").value;
  var sum = 0;

  for(var i = 0; i < str.length; i++) {
      var s1 = valuerRoman(str[i]);

      if (i + 1 < str.length) {
          var s2 =  valuerRoman(str[i+1]);

          if(s1 >= s2) {
              sum += s1;
          }
          else {
              sum += s2 - s1;
              i++;
          }
      }
      else {
          sum += s1;
          i++;
      }
  }
  document.getElementById("dec").innerHTML = sum;
}
//Tìm * để số a chia hết cho b
function timSao(){
    var so1 =document.getElementById("so1").value;
    var so2=document.getElementById("so2").value;
    var kq="";
    if( parseInt(so2) == 3|| parseInt(so2) == 9){
        var arr = so1.split('*');
        var k ="";
        for(i = 0; i < arr.length; i++)
        k += arr[i];
        arr= k.split('');
        //Xử lý tổng
        var sum=0;
        for( var i=0 ;i < arr.length; i++){
            sum += parseInt(arr[i]);
        }
        kq=" Ta có " + so1 +" ⋮ "+ so2 + " <=> " + sum + "+ * ⋮ "+so2 +" <=> * = "  ;
        for( var i=0; i<10;i++){
            if((sum +i)% parseInt(so2) ==0)
                kq += i.toString() +","; 
        }
    }
    if(parseInt(so2) == 5){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 5 || arr[arr.length-1]== 0){
            kq += so1 +" ⋮ 5 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 5 <=> * ⋮ 5 <=> * ={ 0, 5}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0, 5}."
        }
    }
    if(parseInt(so2) == 2){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 0 || parseInt(arr[arr.length-1])== 2 ||parseInt(arr[arr.length-1])== 4 ||parseInt(arr[arr.length-1])== 6 ||parseInt(arr[arr.length-1])== 8 ){
            kq += so1 +" ⋮ 2 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 2 <=> * ⋮ 2 <=> * ={ 0, 2, 4, 6, 8}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0, 2, 4, 6, 8}."
        }
    }
    if(parseInt(so2) == 10){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 0){
            kq += so1 +" ⋮ 10 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 10 <=> * ⋮ 2 <=> * ={ 0}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0}."
        }
    }
    
    document.getElementById("so3").innerHTML=kq;
}
//Tìm bội của 1 số N đã biết
function timBoiN(){
    var boi = document.getElementById("tim_boin").value;
    var arr= document.getElementById("khoang").value;
    var mang = arr.slice(1,arr.length-1).split(",");
    var kq="";
    var d=parseInt(mang[0]);
    var c=parseInt(mang[1]);
    if(d>c || boi>c)
        kq += "Nhập khoảng giá trị sai. ";
    else{
        if(boi > c-d)
            kq="Không tồn tại bội nào thõa mãn.";
        else{
            kq += "Nhân "+boi+" lần lượt với các số 0, 1, 2, 3, ... ta được các bội của "+boi +". Trong khoảng "+arr+ " thì tập bội thõa mãn là: ";
            for(var i=d;i<=c;i++){
                if(i% (parseInt(boi))== 0)
                    kq +=i.toString() +", ";
        }
        }
    }
    document.getElementById("kq_boin").innerHTML=kq.substring(0, kq.length - 1);
}
//Hàm tìm ước của 1 số N đã biết và xuất tổng các ước
function timUocN(){
    var n= document.getElementById("tim_uocn").value;
    var kq="";
    var sum=0;
    for( var i=1; i<= n;i++){
        if(n % i== 0){
            kq +=i.toString()+", ";
            sum +=i;
        }
    }
    kq=kq.slice(0,kq.length-2);
    document.getElementById("kq_uocn").innerHTML="Các ước của "+n+" là: "+kq +". Tổng các ước của "+n +" là :"+sum;
}
//Hàm tìm n để biểu thức chia hết:
function tim_SoN(){
    var a1= document.getElementById("a1").value;
    var a2= document.getElementById("a2").value;
    var b1= document.getElementById("b1").value;
    var b2= document.getElementById("b2").value;
    var kq="Phương pháp giải: ax + b chia hết cho cx+d <br> <=> VT = c.(ax+b) - a(cx+d) chia hết cho cx+d <br> <=> acx + bc - acx - ad chia hết cho cx+d <br> <=> bc - ad chia hết cho cx+d (Tương tự giải như ví dụ trên)";
    kq += "<br>Ta có: VT = ("+a1+"x +"+b1 +") ⋮ ("+a2+"x +"+b2 +")<br>";
    kq += " <=> |("+b1+"."+a2+"-"+a1+"."+b2+")|"+"⋮ ("+a2+"x +"+b2+")<br>" ;
    kq +="<=>"+ (b1*a2 - a1*b2).toString()+"⋮ ("+a2+"x +"+b2+")<br>";
    var tmp= Math.abs(b1*a2 - a1*b2);
    var eq;
    for(var i= 1; i<=tmp;i++){
        if(tmp%i==0){
            eq= parseFloat((i-b2)/(a2));
            kq +=".) "+a2+"x +"+b2+" = "+i+" => x = ("+i+"-" +b2 +") / ("+a2+") = "+ eq +"<br>";
        }
    }
    document.getElementById("kq_timson").innerHTML=kq;
}

//Hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(n){
    if(n<=1)
        return 0;
    for( var i=2; i<=n; i++){
        if(n%i==0)
            return 0;
    }
    return 1;
}
//Hàm phân tích thừa số nguyên tố

function phanTichThuaSoNguyenTo(){
    var n= document.getElementById("pt_snt").value;
    var i= 2;
    var kq="";
    var dem;
    for( i=2;i<=n;i++){
        dem=0;
        while(n % i == 0){
            ++dem;
            n /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(n > i){
                kq += "*";
            }
        }
    }
    document.getElementById("kq_snt").innerHTML = kq;
}
//Hàm ứng dụng phân tích thưà số nguyên tố tìm số ước
function demUocSNT(){
    var n= document.getElementById("dem_usnt").value;
    var tmp=n;
    var i= 2;
    var kq="";
    var dem;
    var tich=1;
    for( i=2;i<=n;i++){
        dem=0;
        while(n % i == 0){
            ++dem;
            n /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(n > i){
                kq += "*";
            }
            tich *= dem+1;
        }
    }
    document.getElementById("kq_demusnt").innerHTML =tmp+" = " + kq+"<br> Vậy số ước là : "+tich;
}
//Hàm tìm UCLN
function UCLN(x,y){
    while(x!=y)   {
        if(x>y) x=x-y;
        else y=y-x;
    }
    return x;
}
// Hàm tìm UCLN theo phân tích thừa số
function tim_UCLN(){
    var n1= document.getElementById("ucln1").value;
    var n2=document.getElementById("ucln2").value;
    var t1= n1;
    var t2= n2;
    var ucln=UCLN(n1,n2);
    var i;
    var dem;
    var kq="Ta có: <br>"+t1+"=";
    for( i=2;i<=t1;i++){
        dem=0;
        while(t1 % i == 0){
            ++dem;
            t1 /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(t1 > i){
                kq += "*";
            }
        }
    }
    kq += "<br>"+t2 +" = ";
    for( i=2;i<=t2;i++){
        dem=0;
        while(t2 % i == 0){
            ++dem;
            t2 /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(t2 > i){
                kq += "*";
            }
        }
    }
    kq+="<br>Vậy UCLN cần tìm là: ";
    for( i=2;i<=ucln;i++){
        dem=0;
        while(ucln % i == 0){
            ++dem;
            ucln /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(ucln > i){
                kq += "*";
            }
        }
    }
    document.getElementById("kq_u").innerHTML=kq;
}
//Hàm tìm BCNN
function BCNN(a,b){
    return (a*b/UCLN(a,b) );
}
//Hàm tìm bcnn
function tim_BCNN(){
    var n1= document.getElementById("boi1").value;
    var n2=document.getElementById("boi2").value;
    var t1=n1;
    var t2=n2;
    var ucln=n1*n2/(UCLN(n1,n2));

    var i;
    var dem;
    var kq="Ta có: <br>"+t1+"=";
    for( i=2;i<=t1;i++){
        dem=0;
        while(t1 % i == 0){
            ++dem;
            t1 /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(t1 > i){
                kq += "*";
            }
        }
    }
    kq += "<br>"+t2 +" = ";
    for( i=2;i<=t2;i++){
        dem=0;
        while(t2 % i == 0){
            ++dem;
            t2 /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(t2 > i){
                kq += "*";
            }
        }
    }
    kq+="<br>Vậy BCNN cần tìm là: ";
    for( i=2;i<=ucln;i++){
        dem=0;
        while(ucln % i == 0){
            ++dem;
            ucln /= i;
        }
        if(dem){
            if(dem > 1)
                kq += i+"^"+dem;
            else
                kq += i;
            if(ucln > i){
                kq += "*";
            }
        }
    }
    document.getElementById("kq_BC").innerHTML=kq;
}
//Tìm BCNN của nhiều số
function BCNN_Mang(arr){
    var ketqua = BCNN(arr[0], arr[1] );
        for(let i=2;i<arr.length;i++){
            ketqua = BCNN(ketqua, arr[i]);    
        }
        return ketqua;
}
//Bieu dien phan so
function frac(x){
    let a = x.split("/")[0].replace(/\s+/g, '');
    let b = x.split("/")[1].replace(/\s+/g, '');
    var span = document.createElement("span");         
        span.className = "frac1";
        span.setAttribute("a",`${a}`);
        span.setAttribute("b",`${b}`);         
        span.innerHTML = "<span class=\"frac\"><span>"+ span.getAttribute("a") +"</span><span class\=\"symbol\">/</span\><span class=\"bottom\">"+ span.getAttribute("b") + "</span></span>";
    return span;
}
function RutGon_PhanSo(n){
    n = n.toString();
    var a = n.split("/")[0].replace(/\s+/g, '');
    var b = n.split("/")[1].replace(/\s+/g, '');
    if(a % b==0){
        return a/b;
    }
    else{
        var ucln = UCLN(Number(a),Number(b));
        a = a/ucln;
        b = b/ucln;      
        return `${a}/${b}`;
    }
}
//Rút gọn phân số
function RutGonPhanSo(){
    var p = document.getElementById("Rutgonphanso");
    p.innerHTML = "";
    var input = document.getElementById("rutgon_phanso").value;
    var a = input.split("/")[0].replace(/\s+/g, '');
    var b = input.split("/")[1].replace(/\s+/g, '');
    
    var string = "Kết quả rút gọn là:  ";
    p.innerHTML = string;
    
    if(a % b==0){
        p.innerHTML += a/b;
    } 
    else{        
        var ucln = UCLN(Number(a),Number(b));
        a = a/ucln;
        b = b/ucln;      
        var span = frac(`${a}/${b}`);
        p.appendChild(span);
        (ucln!=1? p.innerHTML += " (Chia tử và mẫu cho "+ ucln + ")":"");   
    }   
}

function SoSanhPhanSo(){
    let p_tag = document.getElementById("sosanhphanso");
    p_tag.innerHTML = "";
    
    let input = document.getElementById("sosanh_phanso").value;
    let a = input.split(";")[0].replace(/\s+/g, '');
    let b = input.split(";")[1].replace(/\s+/g, '');
    

    var string = "Kết quả so sánh là:  ";
    p_tag.innerHTML = string;

    var float_a = parseFloat(Number(a.split('/')[0]) / Number(a.split('/')[1]));
    var float_b = parseFloat(Number(b.split('/')[0]) / Number(b.split('/')[1]));

    if(float_a > float_b){
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += `(${float_a.toFixed(2)}) > `;
        p_tag.appendChild(frac(b));
        p_tag.innerHTML += `(${float_b.toFixed(2)})`;
    }
    else if(float_a < float_b){
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += `(${float_a.toFixed(2)}) < `;
        p_tag.appendChild(frac(b));
        p_tag.innerHTML += `(${float_b.toFixed(2)})`;
    }
    else{
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += " = ";
        p_tag.appendChild(frac(b));
    }
}

function QuyDongPhanSo(){
    let input = document.getElementById("quydong_phanso").value;
    let p_tag = document.getElementById("quydongphanso");
    let arr_input = input.split(';'); //mảng chứa các phân số
    let arr_mauso =[];
    let arr_tuso = [];
    let arr_thuaso = []
    let flag = false;
    p_tag.innerHTML = "";
    for(let i=0;i<arr_input.length;i++){
        arr_input[i] = arr_input[i].replace(/\s+/g,'');
        var x = arr_input[i];
        arr_input[i] = RutGon_PhanSo(arr_input[i]);
        if(x != arr_input[i]){
            flag=true;
        }
        if(!isNaN(arr_input[i])){
            arr_tuso[i] = arr_input[i]
            arr_mauso[i] = 1
        }else{
            arr_tuso[i] = arr_input[i].split('/')[0];
            arr_mauso[i] = arr_input[i].split('/')[1];  
        }
        
        
    }
    let mau_chung = BCNN_Mang(arr_mauso);
    
    if(flag){
        p_tag.innerHTML += "Rút gọn phân số: ";
        for(let i=0;i<arr_input.length;i++){
            arr_thuaso[i] = mau_chung / arr_mauso[i];
            p_tag.appendChild(frac(`${arr_tuso[i]}/${arr_mauso[i]}`));
            (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");       
        }
        p_tag.innerHTML += "<br>";
    }

    p_tag.innerHTML += "Kết quả quy đồng là : " 
    for(let i=0;i<arr_input.length;i++){
        arr_thuaso[i] = mau_chung / arr_mauso[i];
        p_tag.appendChild(frac(`${arr_tuso[i]}*${arr_thuaso[i]}/${arr_mauso[i]}*${arr_thuaso[i]}`));
        (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");       
    }
    p_tag.innerHTML += `(Mẫu số chung là ${mau_chung})`;
    p_tag.innerHTML += "<br> => "
    for(let i=0;i<arr_input.length;i++){
        p_tag.appendChild(frac(`${arr_tuso[i]*arr_thuaso[i]}/${arr_mauso[i]*arr_thuaso[i]}`));
        (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");   
    }  
}


//hàm chuyển về dạng phân số
function format_phanso(){
    var ele_frac = document.getElementsByClassName("frac1");
            
    for(let i=0;i<ele_frac.length;i++){
        var string = "<span class=\"frac\"><span>"+ ele_frac[i].getAttribute("a") +"</span><span class\=\"symbol\">/</span\><span class=\"bottom\">"+ ele_frac[i].getAttribute("b") + "</span></span>";
        ele_frac[i].innerHTML = string;
    }    
}


// //Hàm tìm u c l n
// function tim_UCLN(){
//     var u1 = document.getElementById("ucln1").value;
//     var u2= document.getElementById("ucln2").value;
//     var i= 2;
//     var kq="Thừa số chung là : ";
// //Tách biến thành thừa số
//     var dem1=0;
//     let arr_so1 = [];
//     let arr_dem1= [];
//     while(u1!=1){       
//         if(u1%i == 0){
//             u1 /= i;
//             dem1++;
//             if(arr_so1.indexOf(i) < 0){
//                 arr_so1.push(i);
//             }
//         }             
//         else{ 
//             i++; 
//             if(dem1!=0){
//                 arr_dem1.push(dem1);
//             }            
//             dem1=0;
//         }
//         if(u1==1){
//             arr_dem1.push(dem1);
//         }
//     }
//     var dem2=0;
//     let arr_so2 = [];
//     let arr_dem2= [];
//     while(u2!=1){       
//         if(u2%i == 0){
//             u2 /= i;
//             dem2++;
//             if(arr_so2.indexOf(i) < 0){
//                 arr_so2.push(i);
//             }
//         }             
//         else{ 
//             i++; 
//             if(dem2!=0){
//                 arr_dem2.push(dem2);
//             }            
//             dem2=0;
//         }
//         if(u2==1){
//             arr_dem2.push(dem2);
//         }
//     }
//     var arr= [];
//     var d=[];
//     for( var i=0; i< arr_so1.length;i++){
//         for( var j=0;j<arr_so2.length;j++){
//             if( arr_so1[i] == arr_so2[j])
//             {
//                 arr.push(arr_so1[i]);
//                 d.push((arr_dem1[i]> arr_dem2[j]) ? arr_dem2[j]: arr_dem1);
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         kq += `${arr[i]}${d[i]==1?"":"^"+d[i]} * `;
//     }
//     kq = kq.slice(0,kq.length-3);
//     document.getElementById("kq_ucln").innerHTML=kq;
// }
function demPTLienTiep(){
    var n= document.getElementById("dem_lientiep").value;
    var arr =n.split(';');
    var dau=parseInt(arr[0]);
    var cuoi= parseInt(arr[arr.length-1]);
    var k=cuoi-dau+1;
    var kq="Số phần tử của tập A = {"+n+"} là: "+ cuoi+" - "+dau+" + 1 ="+k;
    document.getElementById("kq_demlientiep").innerHTML=kq;
}
function lietKeChanLe(){
    var check= document.getElementById("cl").value;
    var dieukien= document.getElementById("demcl").value;
    var arr=dieukien.split('<');
    var dau= parseInt(arr[0]);
    var cuoi= parseInt(arr[2]);
    var th="";
    if(dau>cuoi)
        kq+="Nhập khoảng giá trị sai."
    else{
        if(check=="chẵn"){
            for(var i=dau+1; i<cuoi ;i++)
                if(i%2==0)
                    th+=i.toString()+" ;";
        }
        else{
            for(var i=dau+1;i<cuoi;i++)
                if(i%2!=0)
                    th+=i.toString()+" ;";
        }
    }
    document.getElementById("lietke_cl").innerHTML= "A = {"+th.substring(0, th.length - 1)+"}";
}
function demSPTChanLe(){
    var n=document.getElementById("dem_sptchanle").value;
    var check=document.getElementById("chanle").value;
    var kq="";
    var d=0;
    var arr=n.split(';');
    var dau= parseInt(arr[0]);
    var cuoi= parseInt(arr[arr.length-1]);
    if(check=="chẵn" && dau%2==0 && cuoi%2==0){
        kq+="Tập hợp D có số phần tử chẵn hợp là:";
        d=(cuoi-dau)/2+1;
    }if(check=="lẻ" && dau%2!=0 && cuoi%2!=0){
        kq+="Tập hợp D có số phần tử lẻ là:";
        d=(cuoi-dau)/2+1;
    }else{
        kq+="Nhập tập hợp sai."
    }
    document.getElementById("kq_sptchanle").innerHTML=kq +"( "+cuoi+" - "+dau+"):2 + 1 ="+d;
}
//Tìm số đối
function timSD(){
    var n=document.getElementById("doi").value;
    var kq=" Số đối của "+n+" là : "
    if(parseInt(n)==0){
        kq+="0";
    }if(parseInt(n)>0){
        kq+="-"+n;
    }else{
        kq+=(-n).toString();
    }
    document.getElementById("kq_doi").innerHTML=kq;
}

//Xuất số ước của 1 số nguyên
function timUocZ(){
    var n= document.getElementById("soz").value;
    var t= Math.abs(parseInt(n));
    var kq="Tập hợp các ước của số nguyên vừa nhập là:<br>A = {";
    for( var i=1;i<=t;i++){
        if(t%i==0){
            kq+=i.toString()+";"+"-"+i.toString()+";";
        }
    }
    document.getElementById("kq_z").innerHTML=kq.substring(0,kq.length-1)+"}";
}
//Đếm số ước của 1 số nguyên
function demUocZ(){
    var n= document.getElementById("so_z").value;
    var t= Math.abs(parseInt(n));
    var kq="Số |"+n+"| có ";
    var k=0;
    for( var i=1;i<=t;i++){
        if(t%i==0){
            k++;
        }
    }
    kq+=k.toString() +" ước. <br> Vậy số ước nguyên của số nguyên "+n +" là: "+2*k;
    document.getElementById("kq_soz").innerHTML=kq;
}
//Lớp 7
//GT hs tại 1 điểm xác định
function tinhHS(){
    var x=document.getElementById("x_d").value;
    var y=document.getElementById("hamso_x").value;
    document.getElementById("kq_hamso").innerHTML= "f("+x+") = " +y.replace(/x/g,"("+x+")");
}
function doDaiCanh(){
    var n= document.getElementById("canh_tl").value;
    
    var arr= n.split(";");
    var x=parseInt(arr[0]);
    var y=parseInt(arr[1]);
    var z=parseInt(arr[2]);
    var s= parseInt(document.getElementById("chuvi").value);
    var kq="Gọi độ dài 3 cạnh của tam giác lần lượt là x,y,z.<br>Theo đề ra ta có: x/"+x+" = y/"+y +" = z/"+z +" và x+y+z = "+s;
    var t=parseFloat(s/(x+y+z));
    kq+="<br>=>"+"x/"+x.toString()+" = y/"+y.toString() +" = z/"+z.toString() +" = (x+y+z)/"+"("+x+"+"+y+"+"+z+") = "+ t+"<br>Vậy 3 cạnh của tam giác lần lượt là: "+ t*x+", "+t*y+", "+t*z;
    document.getElementById("kq_canh").innerHTML=kq;
}
function rutGonBT(){
    var n= document.getElementById("tl_3so").value;
    var a= n.split(";");
    var x= a[0];
    var y= a[1];
    var z= a[2];
    var tu= document.getElementById("tu_bt").value.split(';');
    var mau= document.getElementById("mau_bt").value.split(';');
    if(tu.length != 3 || mau.length != 3 ){
        kq = "Không hợp lệ"
    }else{
        kq = `x = ${x}t , y = ${y}t , z = ${z}t \n thay vào biểu thức ta có: S = ` + frac(`${tu[0]}*${x}t `+(tu[1]>0?`+`:``)+`${tu[1]}*${y}t ` + (tu[2]>0?`+`:``) +` ${tu[2]}*${z}t / ${mau[0]}*${x}t `+(mau[1]>0?`+`:``)+` ${mau[1]}*${y}t `+(mau[2]>0?`+`:``)+` ${mau[2]}*${z}`).outerHTML + ` = ` + frac(`${tu[0]*x+tu[1]*y+tu[2]*z}t/${mau[0]*x+mau[1]*y+mau[2]*z}t`).outerHTML;
    }
    document.getElementById('kq_rutgon').innerHTML = kq;
}
//Lớp 8
function giaiPTB2(){
    const arrNumber = []
    const arrOperator = []

    //Tách biểu thức thành 2 vế bởi dấu '='
    var txt = document.getElementById("da").value;;
    txt = txt.toLowerCase();
    var str = txt.split('=');
    //console.log(txt);

    var str1 = str[0].split(/(?:\+|-)+/);
    //console.log(str1);

    var regexObj = new RegExp(/([\da-z\^]+)|([+\-\=]+)/g);//Lấy số và dấu
    let match = txt.match(regexObj);

    match.forEach(function (item) {
        if (item == "+" || item == "-" || item == "=") {
            arrOperator.push(item);
        }
        else {
            arrNumber.push(item);
        }
    });

    var vt = arrOperator.indexOf("="); // vị trí của dấu '='
    //console.log(arrOperator);
    var sptt = str1.length;// đếm số phần tử trước dấu '='
    var spts = arrNumber.length - sptt;// đếm số phần tử trước dấu '='
    var sds = arrOperator.length - vt - 1; //đếm số dấu sau dấu '='
    var sdt = arrOperator.length - sds - 1;

    //console.log(sptt + " " + spts +" " +sdt + " "+sds)
    if (sptt > sdt) {
        arrOperator.unshift("+");
    }
    if (spts > sds) {
        arrOperator.splice(arrOperator.indexOf("=") + 1, 0, "+");
    }


    //console.log(arrNumber);
    //console.log(arrOperator);

    var a = 0, b = 0, c = 0;
    var vt = arrOperator.indexOf("=");
    arrOperator.splice(arrOperator.indexOf("="), 1) // remove dấu '='
    var chuyenve = "";
    //console.log(arrOperator);
    for (let i = 0; i < arrNumber.length; i++) {
        if (i >= vt) //đổi dấu nếu ở phía sau dấu '='
        {
            if (arrOperator[i] == "+")
                arrOperator[i] = "-";
            else if (arrOperator[i] == "-")
                arrOperator[i] = "+";
        }
        if (arrNumber[i].indexOf("x^2") >= 0) // lấy hệ số của x^2 rồi cộng 
        {
            num = arrNumber[i].substr(0, arrNumber[i].indexOf("x^2"));
            if (num == "") {
                num = "1";
            }
            num = arrOperator[i].concat(num);
            a += Number(num);
        }
        else if (arrNumber[i].indexOf("x") >= 0) { //hệ số của x
            num = arrNumber[i].substr(0, arrNumber[i].indexOf("x"));
            if (num == "") {
                num = "1";
            }
            num = arrOperator[i].concat(num);
            b += Number(num);
        }
        else {
            num = arrOperator[i].concat(arrNumber[i]); //hệ số c
            console.log(num + " ");
            c += Number(num);

        }
        chuyenve += arrOperator[i] + " " + arrNumber[i] + " "; //Chuyển về ax^2 + bx + c = 0
    }
    if (arrOperator[0] == "+")
        chuyenve = chuyenve.slice(2); // bỏ đi dấu '+' ở số đầu tiên
    //console.log("Chuyen ve: " + chuyenve + " = 0"); //Chuyển về ax^2 + bx + c = 0

    var heso = [a.toString(), b.toString(), c.toString()]
    for (let i = 1; i < heso.length; i++) {
        if (Number(heso[i]) >= 0) {
            heso[i] = "+" + heso[i];
        }
    } //lấy hệ số và dấu để trình bày

    //text là biến để in ra HTML, mà t kh in ra được nên đổi lại console.log để test
    var info = "";
    info += "Rut gon bieu thuc: " + heso[0] + "x^2" + heso[1] + "x" + heso[2] + " = 0" + "</br>";
    //text = "Rut gon bieu thuc: "+ heso[0] +"x^2 " + heso[1]+ "x " + heso[2]+" = 0";

    info += "Voi a=" + a + ",b=" + b + ",c=" + c + "</br>";
    //console.log("a=%d,b=%d,c=%d", a, b, c);
    //text= "a=" + a + ", b=" + b + ", c=" +c;
    if (a != 0) {
        var delta = b * b - 4 * a * c;

        info += "Delta = b<sup>2</sup> - 4ac = (" + b + ")<sup>2</sup> - 4*(" + a + ")*(" + c + ") =" + delta + "</br>";
        //console.log("Tim delta: b^2 - 4ac = (%d)^2 - 4*%d*%d = %d", b, a, c, delta);
        //text = "Tim delta: b^2 - 4ac = (" + b +")^2 - 4*" + a + "*" + c + " = " + delta;

        if (delta < 0) {
            info += " => Delta < 0: Phuong trinh vo nghiem";
            //console.log("Delta < 0: Phuong trinh vo nghiem");
            //text = "Delta < 0: Phuong trinh vo nghiem";

        }
        else if (delta == 0) {
            info += " => Delta = 0: Phuong trinh co nghiem kep: x1 = x2 = "+frac("-b/2a").outerHTML+" = "+ frac(`${-b}/${2*a}`).outerHTML +" = " + (-b / (2 * a).toFixed(2));
            //console.log("Delta = 0: Phuong trinh co nghiem kep: x1=x2= -b/2*a = -(%d)/2*%d = %f", b, a, (float) - b / (2 * a).toFixed(2));
            //text = "Delta = 0: Phuong trinh co nghiem kep: x1 = x2 = -b/a = -("+ b +")/2*" + a + " = " + (-b/(2*a).toFixed(2));
        }
        else {
            x1 = (-b + Math.sqrt(delta)) / 2 * a;
            x2 = (-b - Math.sqrt(delta)) / 2 * a;
            y2=frac(`${-b}-&radic;${delta}/${2*a}`).outerHTML;
            y1=frac(`${-b}+&radic;${delta}/${2*a}`).outerHTML;
            info += " => Delta > 0: Phuong trinh co 2 nghiem phan biet x1 = "+ y1 +" = " + x1.toFixed(2) + ", x2 = "+ y2 +" = " + x2.toFixed(2);
            //console.log("Delta > 0: Phuong trinh co 2 nghiem phan biet x1= %f, x2= %f", x1.toFixed(2), x2.toFixed(2));
            //text = "Delta > 0: Phuong trinh co 2 nghiem phan biet x1= "+ x1.toFixed(2) +", x2= "+ x2.toFixed(2);
        }
    }
    else {
        info += "Phuong trinh co nghiem: x= "+frac("c/b").outerHTML +" = "+ frac(`${-c}/${b}`).outerHTML +" =  " + (-c / b).toFixed(2);
        //console.log("Phuong trinh co nghiem: x= -c/b = %d/%d = %f", -c, b, (-c / b).toFixed(2));
    }
    document.getElementById("kq_pt2").innerHTML = info;
}
function TinhPhanSo(){
    var input = document.getElementById('tinh_phanso').value;
    let p_tag = document.getElementById('tinhphanso');
    operator = input.match(/([+\-*:])/)[0];
    a = input.split(operator)[0]
    b = input.split(operator)[1]
    a = a.split('/');
    b = b.split('/');
    tu_a  = Number(a[0]);
    mau_a = Number(a[1]);
    tu_b = Number(b[0]);
    mau_b = Number(b[1]);
    bcnn = BCNN(mau_a,mau_b);
    if(operator.length > 0){
        switch (operator){
            case '+':                
                b1 ="<br>Mẫu số chung là: " + bcnn;
                thuaso_a = bcnn;
                thuaso_b = bcnn;
                b2 = "<br>Quy đồng 2 phân số:" + frac(`${tu_a}*(${thuaso_a})/${mau_a}*(${thuaso_a})`).outerHTML + '+' + frac(`${tu_b}*(${thuaso_b})/${mau_b}*(${thuaso_b})`).outerHTML;
                kq = b1+b2+"<br>Kết quả là: " + frac(`${tu_a*thuaso_a+tu_b*thuaso_b}/${mau_a*thuaso_a}`).outerHTML;                
                break;
            case '-':
                b1 ="<br>Mẫu số chung là: " + bcnn;
                thuaso_a = bcnn;
                thuaso_b = bcnn;
                b2 = "<br>Quy đồng 2 phân số:" + frac(`${tu_a}*(${thuaso_a})/${mau_a}*(${thuaso_a})`).outerHTML + '-' + frac(`${tu_b}*(${thuaso_b})/${mau_b}*(${thuaso_b})`).outerHTML;
                kq = b1 + b2 +"\nKết quả là: " + frac(`${tu_a*thuaso_a-tu_b*thuaso_b}/${mau_a*thuaso_a}`).outerHTML;
                break;
            case '*':
                kq = "<br>Kết quả là: " +frac(`${tu_a}*${tu_b}/${mau_a}*${mau_b}`).outerHTML +frac(`${tu_a*tu_b}/${mau_a*mau_b}`).outerHTML;
                break;
            case ':':
                kq = "<br>Kết quả là: " + frac(`${tu_a}*${mau_b}/${tu_b}*${mau_a}`).outerHTML + frac(`${tu_a/mau_b}/${tu_b*mau_a}`).outerHTML;
                break;
        }
        
    }

    p_tag.innerHTML ="Giải:" +  kq;
}
