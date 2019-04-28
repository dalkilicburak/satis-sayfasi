var app = new Vue({
el:'#bilgi',
data:{
urun:'Arduino',
resim:'file:///C:/Users/Furkan/Desktop/orijinaljpg.jpg',
sayi:'1',
maddeler:["Kargo Ücretsiz","USB kablo ile birlikte"],
detaylar:[
    {
        id:01,
        color:"orijinal",
        resim12:'file:///C:/Users/Furkan/Desktop/orijinaljpg.jpg'

    },
    {
        id:02,
        color:"klon",
        resim12:'file:///C:/Users/Furkan/Desktop/klon1.jpg'
    }   
],
card: 0
},
methods:{
addToCart:function(){
    this.card+=1   
    this.sayi-=1 
},

delete1:function(){
    this.card-=1
    this.sayi+=1
},
updateProduct:function (resim12){
    this.resim = resim12

}

}
})