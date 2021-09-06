
window.onload = function(){


    var about=document.getElementsByClassName("about");
    var tekst=[
        "We are cat shelter <span>Greeny</span>, the second registered shelter in Serbia, which was established in 2014. It is unique cat heaven with plenty of open spaces where all of the rescued cats are provided with a lifetime of care in a cage-free environment."
        ,
        "As the number of our cats was growing rapidly, we dedicated ourselves to start with cat adoption. We made this website which was launched in 2016. All of that was made with one purpose and that is helping our cats to find their happy home, but also giving future owners a chance to have a cat by their side, as they always wanted."
        ,
        "During all these years working on our happy adoption, we have made our cats' lives better as much as we can. Cat adoption is our biggest success and we are looking forward to helping you to find your happy lifelong friend!"
    ];
    
    for(let i=0;i<about.length;i++)
    {
        about[i].innerHTML+="<div><h3></h3></div>";
        about[i].innerHTML+="<p>"+tekst[i]+"</p>";
    
        about[i].firstElementChild.classList.add("okvir");
        //about[0].firstElementChild.nextElementSibling.classList.add("greeny");
        $(about[0]).find("span").addClass("greeny");
    }
    
//HEADER
var slike=["slika1", "slika2", "slika3"];
var opisi=["A cat zawns", "Two cats outside", "Siamese cat"];
var i=1;
setInterval(function(){
    document.getElementById("slika").src="images/"+slike[i]+".jpg";
    document.getElementById("slika").alt=opisi[i++];
    if(i==3)
    {
        i=0;
    }
}, 3000);

//2014 COUNTING
var j=-1;
var speed2014=setInterval(function(){

    if(j==2014)
    {
        clearInterval(speed2014);
    }
    about[0].firstElementChild.firstElementChild.innerHTML=j;
    j+=5;

}, 30);
//2016 COUNTING
var k=1;
var speed2016=setInterval(function(){

    if(k==2016)
    {
        clearInterval(speed2016);
    }
    about[1].firstElementChild.firstElementChild.innerHTML=k;
    k+=5
}, 30);
    about[2].firstElementChild.firstElementChild.innerHTML=("now").toUpperCase(); 

//FIND A CAT
var ljubimci=["White Paws", "Orange", "Grizzly", "Blacky", "Pirate","Sweet Greeny","Little Pirate", "Boo"];
var ljubimciGodine=["11 months", "2 years", "3 years", "7 months", "5 years", "3 years", "8 months", "6 months"];
var pol=["M", "M", "F", "F","F", "M", "F", "M"];
var glavnaSlika=["whitePawsMain", "orangeMain", "grizzlyMain", "blackyMain", "pirateMain", "sweetGreenyMain", "littlePirateMain", "booMain"];
var slikeAlt=["White Paws cat is lying.","Orange cat is looking at the camera.", "Grizzly cat.", "Confused face of Blacky cat.", "Pirate cat.", "Sweet Greeny cat.", "Little Pirate is looking.", "Cute Boo cat."];
var captionLjubimci=["White Paws kitten", "Orange cat", "Grizzly cat", "Blacky kitten", "Pirate cat", "Sweet Greeny cat", "Little Pirate kitten", "Boo kitten"];
var description=["White Paws is Greeny's first kitten in her life. His favourite place for sleeping is on a couch. He is more active during the day and prefer playing together with other cats. Also, White Paws is really kind and adores to pet.",
"Although Orange is a shy cat, he won't be quite as long as he is alone. He prefer roaming around the house more than being inside. Because of his injury he limps a bit. Few years ago Orange had jumped badly from the roof and broke his leg. Of course, he is healthy now and our treatment helped him a lot.",
"Grizzly is a noisy cat but also timid and lovely. She is most of the time roaming house and meowing if you're not petting her. She prefers having company as well as Orange and adore sleeping under the chair on a carpet.",
"Blacky is cute kitten who does not like to be alone. She just need someone with her in the room. She is following you all the time wherever you go insde the house. Blacky is kitten who adores petting and lying right next to you while you're sitting on a couch or a bed.",
"She is the oldest of our cats. We saved her from the street many years ago when the stray dogs had attacked her. She likes milk more than anything so she is able to sit next to bowl and drink as long as there is milk inside. Pirate lost her eye during the fight with a male cat in backyard while she was defending her kittens. Eye was badly scratched at first but it got out after a month. She is also the bravest cat and big hunter of mice.",
"Sweet Greeny is the cutest cat you have ever seen and most lazy as well. He is spending days sleeping and eating. He rarely meows;just when he has to and runs the faster when it's about the food.",
"Little Pirate is tiny kitten with a broken tail. We had to remove part of tail but that does not make her any harder to keep living the life. She is healthy but have problems with appetite. ",
"Boo is another active kitten who spends all the days playing and running in backyard. Although he is small kitten, he eats much. Especially mild fresh soup with bread and meat."];

var slikeZaLjubimceReadMore=[`<a class="mini" href="images/whitePaws1.jpg"><img src="images/whitePaws1.jpg" class="slikeMini" alt="White Paws picture 1"/></a>
<a class="mini" href="images/whitePaws2.jpg"><img src="images/whitePaws4.jpg"  class="slikeMini" alt="White Paws picture 2"/></a>
<a class="mini" href="images/whitePaws3.jpg"><img src="images/whitePaws3.jpg" class="slikeMini" alt="White Paws picture 3"/></a>`,

`<a class="mini" href="images/orange1.jpg"><img src="images/orange1.jpg" class="slikeMini" alt="Orange's picture 1"/></a>
<a class="mini" href="images/orange2.jpg"><img src="images/orange2.jpg"  class="slikeMini" alt="Orange's picture 2"/></a>
<a class="mini" href="images/orange3.jpg"><img src="images/orange3.jpg" class="slikeMini" alt="Orange's picture 3"/></a>`,

`<a class="mini" href="images/grizzly1.jpg"><img src="images/grizzly1.jpg" class="slikeMini" alt="Grizzly's picture 1"/></a>
<a class="mini" href="images/grizzly2.jpg"><img src="images/grizzly2.jpg"  class="slikeMini" alt="Grizzly's picture 2"/></a>
<a class="mini" href="images/grizzly3.jpg"><img src="images/grizzly3.jpg" class="slikeMini" alt="Grizzly's picture 3"/></a>`,

`<a class="mini" href="images/blacky1.jpg"><img src="images/blacky1.jpg" class="slikeMini" alt="Blacky's picture 1"/></a>`,

`<a class="mini" href="images/pirate1.jpg"><img src="images/pirate1.jpg" class="slikeMini" alt="Pirate's picture 1"/></a>
<a class="mini" href="images/pirate2.jpg"><img src="images/pirate2.jpg"  class="slikeMini" alt="Pirate's picture 2"/></a>`,

`<a class="mini" href="images/sweet1.jpg"><img src="images/sweet1.jpg" class="slikeMini" alt="Sweet Greeny's picture 1"/></a>
<a class="mini" href="images/sweet2.jpg"><img src="images/sweet2.jpg"  class="slikeMini" alt="Sweet Greeny's picture 2"/></a>
<a class="mini" href="images/sweet3.jpg"><img src="images/sweet3.jpg" class="slikeMini" alt="Sweet Greeny's picture 3"/></a>`,

`<a class="mini" href="images/little1.jpg"><img src="images/little1.jpg" class="slikeMini" alt="Little pirate's picture 1"/></a>
<a class="mini" href="images/little2.jpg"><img src="images/little2.jpg"  class="slikeMini" alt="Little pirate's picture 2"/></a>
<a class="mini" href="images/little3.jpg"><img src="images/little3.jpg" class="slikeMini" alt="Little pirate's picture 3"/></a>`,

`<a class="mini" href="images/boo1.jpg"><img src="images/boo1.jpg" class="slikeMini" alt="Orange picture 1"/></a>
<a class="mini" href="images/boo1.2pg"><img src="images/boo2.jpg" class="slikeMini" alt="Boo's picture 2"/></a>
<a class="mini" href="images/boo1.3pg"><img src="images/boo3.jpg" class="slikeMini" alt="Boo's picture 3"/></a>`
];


var divovi=document.getElementsByClassName("div");
for(let o=0;o<ljubimci.length;o++)
{
    var div=document.createElement("div");
    div.classList.add("col-lg-3","divovi","col-md-6","col-sm-12","position-relative");
    div.setAttribute("data-aos","fade-right");

    div.innerHTML+=`<a href="images/${glavnaSlika[o]}.jpg" class="linkZaLjubimce" title="${captionLjubimci[o]}"><img src="images/${glavnaSlika[o]}.jpg" class="img-responsive" alt="${slikeAlt[o]}" /></a>
    `;
    if(pol[o]=="M")
    div.innerHTML+=`<i class="fas fa-mars"></i>`;
    else
    div.innerHTML+=`<i class="fas fa-venus"></i>`;

    div.innerHTML+=`<span class="ljubimciGodine">${ljubimciGodine[o]}</span>`;
    div.innerHTML+=`<h3 class="text-center m-0">${ljubimci[o]}</h3>`;

    div.innerHTML+=`<a href="#forma" class="text-decoration-none linkA text-uppercase"> Adopt </a><a href="#" class="text-decoration-none linkB text-uppercase"> Read more </a>`;

    div.innerHTML+=`<div class="d-none slova"> <h3 class="mt-3 mb-3">${ljubimci[o]}</h3> <p class="pl-2 pr-2">${description[o]} </p> <p> Click on the pictures below for a better view: </p> ${slikeZaLjubimceReadMore[o]} </div>`;
    
    if(o>=4)
    {
        divovi[1].appendChild(div);
    }
    else
        divovi[0].appendChild(div);
}
    
//FUTER
var zaSocial=[`<i class="fab fa-facebook-square"></i>`,`<i class="fab fa-instagram"></i>`, `<i class="fab fa-twitter-square"></i>`];
var linkovi=["https://www.facebook.com", "https://www.instagram.com", "https://twitter.com"];
var lista=document.createElement("ul");
lista.classList.add("list-unstyled", "listaFuter", "d-flex","flex-direction-row", "justify-content-around");
document.getElementById("social").appendChild(lista);

for(let i=0;i<zaSocial.length;i++)
{
    document.querySelector("#social ul").innerHTML+=`<li>
                            <a target="_blank" href="${linkovi[i]}" class="text-decoration-none">
                                ${zaSocial[i]}
                            </a>
                      </li>`;
}

var zaFiles=[`<i class="fas fa-sitemap"></i>`, `<i class="far fa-file-code"></i>`, `<i class="far fa-address-card"></i>`];
var putanje=["sitemap.xml","dokumentacija.pdf","#test-modal"];
var lista1=document.createElement("ul");
lista1.classList.add("list-unstyled", "listaFuter", "d-flex","flex-row", "justify-content-around");
document.getElementById("files").appendChild(lista1);
for(let i=0;i<zaFiles.length;i++)
{
    if(i==2)
    {
    document.querySelector("#files ul").innerHTML+=`<li>
                        <a target="_blank" href="${putanje[i]}" class="text-decoration-none popup-modal">
                            ${zaFiles[i]}
                        </a>
                    </li>`;
    }
    else
    {
    document.querySelector("#files ul").innerHTML+=`<li>
                            <a target="_blank" href="${putanje[i]}" class="text-decoration-none">
                                ${zaFiles[i]}
                            </a>
                      </li>`;
    }
}

/*FORMAA */
/*OPTION AUTO */
var selectAdopt=document.getElementById("adopt");
selectAdopt.innerHTML+=`<option value="0" selected> Choose... </option>`;
for(let i=0;i<ljubimci.length;i++)
{
selectAdopt.innerHTML+=`<option value="${i+1}"> ${ljubimci[i]} </option>`;
}

/*DODATNO+ */
var listaReason=document.getElementById("reason");
listaReason.addEventListener("change",function(){
var skriveni=document.getElementsByClassName("sk");
if(listaReason.value=='2')
{
        for(let i=0;i<skriveni.length;i++)
    {
        let promeni=document.getElementsByClassName("promeniCol")[0];
        promeni.classList.add("col-md-6");
        promeni.classList.remove("col-md-12");
        skriveni[i].classList.remove("skriven");
    }
}
else
    {
        for(let i=0;i<skriveni.length;i++)
    {
        let promeni=document.getElementsByClassName("promeniCol")[0];
        promeni.classList.add("col-md-12");
        promeni.classList.remove("col-md-6");
        skriveni[i].classList.add("skriven");
    }
    }
})

    //FORMA VALID

    var izaberiReason=document.getElementById("reason");
    var spanReason=izaberiReason.nextElementSibling;

    var izaberiAdopt=document.getElementById("adopt");
    var spanAdopt=izaberiAdopt.nextElementSibling;

    var dugme=document.getElementById("dugme");

    dugme.addEventListener("click",function(){
        var nizGreske=[];
    dugme.classList.add("bojaKlik");

    if(izaberiReason.value=='0')
    {
        spanReason.innerHTML="Choose type of your message";
        spanReason.classList.add("greska");
        nizGreske.push("Non-selected type of message.");
    }
    else
    {
        spanReason.innerHTML="";
        spanReason.classList.remove("greska");
        nizGreske.pop();
    }

    //APROVERA ADOPT SELECT ------------------

    if(izaberiAdopt.value=='0')
    {
        spanAdopt.innerHTML="Choose a cat";
        spanAdopt.classList.add("greska");
        nizGreske.push("Non-selected cat for adoption.");
    }
    else
    {
        spanAdopt.innerHTML="";
        spanAdopt.classList.remove("greska");
        nizGreske.pop();
    }

    //provera ime 

    var ime=document.getElementById("FirstName");
    var spanIme=ime.nextElementSibling;
    var proveraIme=/^[A-Z][a-z]{2,}$/;

    if(proveraIme.test(ime.value))
        {
            spanIme.innerHTML="";
            spanIme.classList.remove("greska");
            nizGreske.pop();
        }
        else
        {
            spanIme.innerHTML="Incorrect name";
            spanIme.classList.add("greska");
            nizGreske.push('Incorrect name.');
        }

        //provera prweyime

        var prezime=document.getElementById("LastName");
    var spanPrezime=prezime.nextElementSibling;
    var proveraPrezime=/^([A-Z][a-z]{2,})(\s[A-Z][a-z]{2,})?$/;

        if(proveraPrezime.test(prezime.value))
        {
            spanPrezime.innerHTML="";
            spanPrezime.classList.remove("greska");
            nizGreske.pop();
        }
        else
        {
            spanPrezime.innerHTML="Incorrect last name";
            spanPrezime.classList.add("greska");
            nizGreske.push('Incorrect last name.');
        }

        //provera email

    var email=document.getElementById("email");
    var spanEmail=email.nextElementSibling;
    var proveraEmail=/^([a-z0-9\.\_\-])+@([a-z])+\.([a-z]){2,}$/;
     document.getElementById("email").autocomplete = "off";

        if(proveraEmail.test(email.value))
        {
            spanEmail.innerHTML="";
            spanEmail.classList.remove("greska");
            nizGreske.pop();
        }
        else
        {
            spanEmail.innerHTML="Incorrect e-mail address";
            spanEmail.classList.add("greska");
            nizGreske.push('Incorrect e-mail.');
        }
                var skup='';
                if(nizGreske.length!=0)
                {
                    for(let i=0;i<nizGreske.length;i++)
                    {
                        skup+=`${nizGreske[i]} <br/><br/>`;
                    }
                   
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title:`${skup}`,
                        showConfirmButton: true,
                        timer: 5000 })
                }
                if(nizGreske.length==0)
                {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your message has been sent!',
                    showConfirmButton: false,
                    timer: 2000
                })
                }
})

    //out shelter
    var shelterNiz=[];
    var shelterAlt=[];
    for(let i=0;i<12;i++)
    {
        shelterNiz[i]=i+1;
        shelterAlt[i]=`Gallery ${i+1}`;
    }
    for(let i=0;i<shelterNiz.length;i++)
    {
        if(i<=5)
       {
        var row1=document.createElement("div");
        row1.classList.add("col-lg-2","col-md-4","col-sm-6","p-0","mb-3");
        row1.innerHTML+=`<a class="linkSlika" href="images/shelter/${shelterNiz[i]}.jpg" title="${shelterAlt[i]}"><img src="images/shelter/${shelterNiz[i]}.jpg" alt="${shelterAlt[i]}  class="slikaShelter" /></a>`;
        document.getElementsByClassName("shelter")[0].appendChild(row1);
        }

        else
        {
        var row2=document.createElement("div");
        row2.classList.add("col-lg-2","col-md-4","col-sm-6", "p-0","mb-3");
        row2.innerHTML+=`<a class="linkSlika" title="${shelterAlt[i]}" href="images/shelter/${shelterNiz[i]}.jpg"><img src="images/shelter/${shelterNiz[i]}.jpg" alt="${shelterAlt[i]} class="slikaShelter" />`;
        document.getElementsByClassName("shelter")[1].appendChild(row2);
        }
    }

/*JQUERY CODES */
/*YOU JUST HAVE TO PROVIDE THEM*/
$(document).ready(function(){
$('#services .weProvide').hover(function(){
    $(this).removeClass('weProvide');
    $(this).addClass('weProvideOpposite');
},
function(){
    $(this).removeClass('weProvideOpposite');
    $(this).addClass('weProvide');
});

//FUTER ZOOOOM IN OUT
$('.listaFuter li a i').hover(function(){
    $(this).stop(true,true).animate({fontSize: "+=4px",paddingTop:"-=2px"
}, 500);
},
function(){
    $(this).stop(true,true).animate({fontSize:"-=4px",paddingTop:"+=2px"}, 500);
});

//ADOPT FUNCTION
$('.linkA').click(function(){
   //CHANGE FORM
   $("#reason").val("2").change();
   $('.sk').removeClass("skriven");
   $('.promeniCol').removeClass("col-md-12").addClass("col-md-6");
});
   //LINK HERE IN SPECIAL OFFER
   $('#here').click(function(){
    //CHANGE FORM
    $("#reason").val("2").change();
    $('.sk').removeClass("skriven");
    $('.promeniCol').removeClass("col-md-12").addClass("col-md-6");
});

 //LJUBIMCI DESCRIPTION
    var brojac=0;
    $('.linkB').click(function(e){
        e.preventDefault();
        brojac++;

        if(brojac%2==1)
        {
            $(this).next().addClass("apsolutni");
            $(this).text('Close'); 
        }
        else{
            $(this).next().removeClass("apsolutni");
            $(this).text('Read more');
        }
    })

    $('.linkA').click(function(){
    //SELECT A CAT AUTO
    var selected=$(this).prev().text();
    var pronadjiPar;
    var optioniAdopt= document.querySelectorAll('#adopt option');

    for(let i=0;i<ljubimci.length+1;i++)
    {
        if(optioniAdopt[i].text == selected)
        {
            pronadjiPar=optioniAdopt[i].value;
        }
    }
    $("#adopt").val(pronadjiPar).change();
    });

//POKVAREN MENI
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggle('slow');
    })

    //hover meni
   $('#lista li').hover(function(){
        $(this).addClass('meniLi');
    }
    ,
    function(){
        $(this).removeClass('meniLi');
    })

    // AOS PLUGIN
    AOS.init();

    $('.popup-modal').click(function(e){
        Swal.fire({  
            text: 'Gabrijela Matovic | 21/18',
            imageUrl: 'images/author.jpg',
            imageWidth: '70%',
            imageHeight: '70%',
            imageAlt: 'Author\'s image',
          })
          e.preventDefault();
    })

    $('.linkSlika').click(function(e){
        let trenutniKlik=$(this).attr("href");
        e.preventDefault();
 
        Swal.fire({
            imageUrl: trenutniKlik,
            imageWidth: '100%',
            imageHeight: '100%',
          })
    })

    $('.linkZaLjubimce').click(function(e){
        let trenutniKlikZaLjubimce=$(this).attr("href");
        let text=$(this).next().next().next().text();
        e.preventDefault();

        Swal.fire({
            title: text,
            imageUrl: trenutniKlikZaLjubimce,
            imageWidth: '400',
            imageHeight: '200',
          })
    })

    $('.mini').click(function(e){
        let MalaSlikaLjubimca=$(this).attr("href");
        e.preventDefault();

        Swal.fire({
            imageUrl: MalaSlikaLjubimca,
            imageWidth: '400',
            imageHeight: '200',
          })
    })

},)}
