class check {
    checkdata(soa,sob){
            soa = Number(soa);
            sob = Number(sob);
       if (Number.isNaN(soa)  || Number.isNaN(sob)){
           console.log('nhap sai du lieu dau vao');
           return false;
       }
       return true;
    }
}

class excute extends check{
    cong(a,b){
	a = Number(a);
	b = Number(b);
        if(this.checkdata(a,b)){      
            console.log(a+b);
             return a+b;
        }
    }
    tru(a,b){
        if(this.checkdata(a,b)){      
            console.log(a-b);
            return a-b;
        }
    }
    nhan(a,b){
        if(this.checkdata(a,b)){          
            console.log(a*b);
            return a*b;
        }
    }
    chia(a,b){
        if(this.checkdata(a,b)){
            if(b == 0){
                console.log('so bi chia can khac 0');
            }else{        
                console.log(a/b);
                return a/b;
            }
        }
    }
}
var run = new excute();
run.tru("999","9");
