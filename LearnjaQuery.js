//Start jaQuery 
// علشان اشغل الجيكويري لازم احمل المكتبه بتاعة الجيكويري في الموقع بتاعي


// $                           // دي معناه الجيكويري 
// $ = > jaQuery              // دي معناها ان الجيكويري هتعمل حاجه في العنصر ال بعديها علي طول


// ("Html Element")          // ده العنصر بتاع الاتش تي ام ال ال هيتعمل عليه الخواص


// hide()                   // دي الاكشن ال بطبقها الجيكويري علي العنصر 


// $("p").hide();          // دي معناها ان الجيكويري بتختار عنصر من الاتش تي ام ال تطبق عليه الاكشن او الحاجه ال انا عايز اعملها 


// $(document).ready()                           //دي لما يكون العنصر في البدايه اعملي حاجه معينه انا ههعملها في الكود 
// $(document).ready()                          //دي طريقة كتابة الكود 
// $("p").ready();                             //دي معناها ابدء اعملي حاجه علي البرجراف ده 

// دي طريقة كتابة الكود //      دي معناها ان اول لما الصفحه يتعملها لود طبق فنكشن او طبق حاجه انا عملها هنا 
//$(document).ready(function()
//{
// Your Code Here
//});                                                              


// دي  تستخدم لما اكون عايز اشغل حاجه انا عمله بعد ما الصفحه ما تحمل علي طول 
//$(document).ready(function()
//{
// Your Code Here
//$("p").hide();                    // دي معناها ان اول لما الصفحه تحمل اخفي البرجراف
//});              

// دي طريقة كتابة الكود المختصر
//$(function(){
    //Your Code Hera
//});

 // دي لما اكون عايز اغير لون البرجرافات ال فصفحه عندي 
//$(document).ready(function()
//{
// Your Code Here
//$("p").css("color","#FFF");
//});




 // Events               //  دي معناها الحدث او الاحداث 
// ده حدث لما اعوز اعمل حدث وبعد كده يترتب عليه حاجه انا هعملها

// click                        // دي اول حدث ال هو الضغط علي        

// دي لما كون عايز اخفي لبرجراف بقوله لما اجي ادوس علي الزرار اخي البرجراف 

//$(document).ready(function()
//{
	//$("button").click(function(){
		//$("p").hide();
	//})
//});

// دي لما اكون عايز اقوله لما ادوس علي الزرار غيرلي لون البرجراف 
//$(document).ready(function()
//{
	//$("button").click(function(){
		//$("p").css("color","#00F");
	//})
//});


// this                    // او اي شئ مكتوب غي الزرار انا كتبهbuttonدي بتعود علي الزرار ال هو 
// دي معناها ان انا لما ادوس علي الزرار خليه يختفي 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(this).hide();
	//})
//});

// الفنكشن دي هيا ال فوقيها بالضبط  
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(button).hide();
	//})
//});

// dblclick             // دي معناها انه يتكا مرتين علي الضغط 


// دي معناها ان لما اجي اضغط ضغطتيت علي الزرار يخفيلي البرجراف 

//$(document).ready(function()
//{
	//$("button").dblclick(function()
	//{
		//$("p").hide();
	//})
//});

// mouseenter                                    // دي معناها انا انا لورحت بالموس علي حاجه غيرلي الحاجه دي للخواص ال انا مدهالها 



// دي معناها ان انا لو رحت بالموس علي الزرار غيرلي لون البرجراف 
//$(document).ready(function()
//{
	//$("button").mouseenter(function()
	//{
		//$("p").css("color","#00F");
	//})
 //دي معناها ان لما اشيل اموس من علي الزرار رجع كل حاجه زاي مكانت
	//$("button").mouseleave(function()
	//{
		//$("p").css("color","#F00");
	//})
//});


//$(document).ready(function()
//{
// دي معناها ان انا بقوله لما تروح علي الزرار خلي الون بتاعه احمر واخفيلي البرجراف 

	//$("button").mouseenter(function()
	//{
		//$(this).css("color","#00F");
		//$("p").hide();
	//})

	//$("button").mouseleave(function()
	//{
		//$(this).css("color","#F00");
	//})
//});

 //hover 

// دي معناها ان انا بقوله لما تروح علي الزرار و الربجراف اعملي الخواص دي ال انا مد هملها 

//$(document).ready(function()
//{
	//$("button").hover(function()
	//{
		//$(this).css("color","#00F");
		//$("p").hide();
	//})
//}); 

 // hoverدي طريقة كتابة كود ال 

//$(document).ready(function()
//{
	//$("button").اhover(
	//function()
	//{
		//$(this).css("color","#F00");
		//$("p").css("color","#080");
	//},
	//function()
	//{
		//$(this).css("color","#00F");
		//$("p").css("color","#676767");
	//});
//});

// الكود ده هو هو الكود ال فوق

//$(document).ready(function()
//{
	//$("button").hover(function()
	//{
		//$(this).css("color","#F00");
		//$("p").css("color","#080");
	//},
	//function()
	//{
		//$(this).css("color","#00F");
		//$("p").css("color","#676767");
	//});
//});


// دي بستخدمها لما اكون عايز ادوس علي زرار او اي شيئ وبعدين اقوله اعملي الحدث ده الا انا بختاره 


// Effects             // المؤثرات 


// hide( speed, callback );                // دي معناها يخفي 

// show( speed, callback )                // دي معناها يظهر 

// toggle( speed, callback )             // دي معناها انها بتبدل ما بنهم 


// hide( speed, callback ); 
// دي لما اكون عايز اخفي عنصر 
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").hide();
		//$(this).hide();
	//});
//});



// hide        (speed دي معناها السرعه, callback دي مناها ان لما البرجراف يختفي يعمل فنكشن معينه مثل لما البرجراف يختفي يطلعلي رساله ان البرجراف اختفا) دي بينكتب جواها خصيتين ال هما 
// hide( speed, callback );  
//hide(speed)("slow", "fast")ده له قيم افتراضيه وهما) 
// وممكن انا احط سرعه من عندي مش لازم القيم الافتراضيه 
// hide( speed )  الي اكثر علي حسب ما انت عايز (400) هنا بيبد السرعه من  );

// دي لما اكون عايز اخلي العنصر يختفي  في وقت معين انا مدهوله او عيزه يختي بسرعه او ببطء 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").hide("slow");
		//$("p").hide("fast");
		//$("p").hide(400);
		//$("p").hide(600);
	//});
//});

// دي طريقة كتابة الكود ان لما اكون عايز عنصر يختفي في وقت معين ويظهر مكان حاجه انا كتبها 

// hide( speed, callback ); 
// hide(3000,function(){$("span").show() }); 

// دي لما اكون عايز اخفي برجراف وعايز يزهر مكانه رساله  

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").toggle();
		//$("p").hide(3000,function(){$("span").show() });
		//$(this).hide();
	//});
//});

// show                                 // jaQueryوعايز اظهره باcss دي لما اكون خافي عنصر في ال 
// دي طريقة كتابة الكود علشان اظهر العصر 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").show();
	//});
//});

// toggle/                                  // hide و showدي بيبدل مابين 

// دي لما يكون العنصر معمول له اظهار يخفيه ولما يختفي ادوس علي الزرار يظهره بيبدل ما بين الاتنين 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").toggle();
	//});
//});

// Fade 
// FadeIn(Speed, Callback);                                 //دي معناها اظهار العنصر 

//    لازم العنصر ال انا هعمل عليه الفنكشن لازم يكون مختفيFadeIn علشان اعمل خصية 

// دي لما يكون العنصر معموله اخفاء وعايز لماادوس علي زرار معين يظهرلي الديف وبعد ميظهر الديف يظهر ال اسبان 


//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(".saul").fadeIn(2000,function(){$("span").show();});
	//});
//});

// fadeOut عكس fedein  
//fadeOut دي لما يكون العنصر ظاهر وانا عايز اخفيه استخدم 
// fadeOut 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(".saul").fadeOut(2000,function(){$("span").fadeOut(2000);});
	//});
//});

// fadeToggle  // دي لما يكون العنصر ظاهر يختفي ولما يكون العنصر مختفي يظهره 
// fadeToggle  // دي عكس fadeInوfadeOut 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(".saul").fadeToggle(2000,function(){$("span").fadeToggle(2000);});
	//});
//});

// fadeTo الخصيه دي له ثلثه من الاوبشن ازيد من ال فاتو

// fadeTo(Speed, Opacity, Callback) 

// fadeTo          // دي معناها ان انا هظهر العنصر الي درجة شفافيه معينه

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(".saul").fadeTo(2000,0.5,function() { $("span").fadeOut(2000); });
	//});
//});

// دي لما يكون في عنصرين موجودين واحد ظاهر و التاني مخفي وعايز اظهر المخفي  

// SlideDown(speed,callback) دي القيم بتاعة الخصيه       
// SlideDown 

//$(document).ready(function()
//{
	//$(".open").click(function()
	//{
		//$(".box").slideDown(2000,function()
			//{
				//$(".open").hide();
			//});
	//});
//});

// SlideUp(speed,callback) دي القيم بتاعة الخصيه //                 دي معناها ان العنصر موجود و الخصيه دي هتخفي العنصر 

//$(document).ready(function()
//{
	//$(".open").click(function()
	//{
		//$(".box").slideUp(5000,);
	//});
//});

// slideToggle(speed,callback)                  // دي بت بدل مبين الخصيتين ال فوق 

//$(document).ready(function()
//{
	//$(".open").click(function()
	//{
		//$(".box").slideToggle(5000,);
	//});
//});

// animate                                 // الخصيه دي بتخلي الموقع بتاعي فيه روح او شغل حلو او بتحي الموقع بتاعي 
// animate( { ال هيتعمل عليها الائنيميتcssهنا بينكتب خواص ال},Speed,Callback )             

// animate({css Properties},speed, Cllback Function)           //طريقة كتابة الكود /

//$(document).ready(function()
//{
	//$(".nono").animate({
		//width:'500px'
	 //},2000,function(){$("span").fadeIn(1000,);});

	//animate({css Properties},speed, Cllback Function)
//});

//$(document).ready(function()
//{
	//$(".nono").animate(
	//{
		//top:'200px',
	//},1000);

	//$(".nono").animate(
	//{
		//width:'400px'
	//},1000);

	//$(".nono").animate(
	//{
		//height:'400px'

	//},1000);

	//$(".nono").animate(
	//{
		//borderRadius:'20px'
	//},1000);
	//$(".nono").animate(
	//{
		//fontSize:'40px'
	//},1000);
	//$(".nono").fadeOut(3000);
	//animate({css Properties},speed, Cllback Function)
//});


// stop( ClearQueue, goToEnd )                  // دي معناها ان بيوقف اي انيميشن شغال في الصفحه 

// stop( ClearQueue, goToEnd )                // ده بياخد قيمتينstopال 
// لما ما بكتبش القيم بتاعته بياخد القيمه الافتراضيه بتاعتع 
// stop( false, false)                       // دي بيوقف اول انيميشن ويشغل التاني وممكن اوقف التاني وشغل التالت وها كذا 
// stop( false, false)                      // دي القيمه الافتراضيه يعني مبيشتغلش   

// stop( true)                             // بيوقف كل الانيميشن ومبيشتغلشtrueلما اديله القيمه 

// stop( true, true)                      // دي لما يكون الانيميشن الاول شغال ويجي يوصل الي النهايه بتاعته ممكن اضغط علي الزرار علشان اجيب اخر حاجه هيقف عليها الانيميشن الاول  
// stop( true, true)                     // ومش هيشغل بقية الانميشن 


// طريقة كتابة الكود 
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(".kaka").stop(true, true);
	//});
	// Frame 1
	//$(".kaka").animate(
	//{
		//width:'600px',
		//height:'400px'
	//},4000);

// Frame 2
	//$(".kaka").animate(
	//{
		//width:'300px',
		//height:'100px',
		//lineHeight:'70px'
	//},1000);

	// Frame 3
	//$(".kaka").animate(
	//{
		//borderRadius:'20px',
		//lineHeight:'70px'
	//},1000);

	// Frame 4
	//$(".kaka").animate(
	//{
		//fontSize:'20px',
		//lineHeight:'70px'
	//},1000);

	// Frame 5
	//$(".kaka").animate(
	//{
		//height:'600px'
	//},1000);
//});


// Chain                            // دي معناها سلسله 
// Chain                           //  دي ممكن اعمل سلسلة مؤثرات علي عنصر واحد من غير مااكرر العنصر 

// slideUp                        // دي بيخفي العنصر من فوق 
// slideDown                     // دي بيظهر العنصر ال اناخفيته 

// دي لما اكون عايز اطبق اكتر من خصيه علي عنصر واحد 
//
//$(document).ready(function()
//{
	//$(".kakaa").slideUp(2000);
	//$(".kakaa").slideDown(2000);
	//$(".kakaa").fadeOut(2000);
	//$(".kakaa").fadeIn(2000);
//});

// الكود ده هو هو الكود ال فوق 
// بس ده مختصر 

//$(document).ready(function()
//{
	//var .kakaa = $(".kakaa")
	//.kakaa.slideUp(2000);
	//.kakaa.slideDown(2000);
	//.kakaa.fadeOut(2000);
	//.kakaa.fadeIn(2000);
//});

// ممكن اكتب الخواص ال انا مديها للعنصر علي خط واحد او في كود واحد والكود ده هو هو ال فوق 

//$(document).ready(function()
//{
	
	//$(".kakaa").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
//});
// ودي طريقه تانيه لكتابة الكود 

//$(document).ready(function()
//{
	//$(".kakaa")
	//.css({background:'#F00'})   //Change Background Color
	//.slideUp(2000)              //Slide Up In 2 Seconds
	//.slideDown(2000)            //Slide Down In  2 Seconds
	//.fadeOut(2000)              
	//.fadeIn(2000)
	//.hide(1000)
	//.show(1000)
	//.animate({width:'600px',height:'600px'},1000);
//});


// دي معناها ان انا لو عايز اجيب قيمة اي عنصراو اجيب المحتوي ال جوه العنصر   
// و ازاي اجيب خواص حقول الادخال البرمجيه وازاي اغير الاتربيوت للعناصر  

// JQuery Html => Get / Set Content         


// get 
// set 



// دي لما اكون عايز اجيب النص ال جوه الديف  
//
//$(document).ready(function()
//{
	//$(".koko").text();
//});

// الكود ده هو هو الكود ال فوق 
//$(document).ready(function()
//{
	//var koko = $(".koko").text();
	//alert(koko);
//});

 //دي لما يكون في ديف جواه نص وعايز النص ده يتكرر في لبرجراف ال فاضي تحتيه  

//$(document).ready(function()
//{
	//var koko = $(".koko").text();
	//$("p").text(koko);
//});

// الكود ده هو هو ال فوق 

//$(document).ready(function()
//{
	//var koko = $(".koko").html();
	//$("p").html( koko );
//});

// دي لما اكون عامل ديف جواه اسبان وجو الاسبان ده نص واخد خواص وعايز البرجراف ال تحتيه ياخد نفس النص بنفس الخواص ال انا مدهالو 

//$(document).ready(function()
//{
	//var koko = $(".koko").html();
	//$(".toti").html( koko );
//});

// دي لما اكون عامل ديف وجواه اسبان وجو الاسبان دي نص ومديلو خواص و البرجراف ال تحتيه فاضي  وعيزه ياخد النص  ال في الاسبان هياخد النص ال مكتوب بالتاجز بكل حااجه ويعملها نص من غير ميلونه او يعمل فيه حاجه 

  //html    دي لما اكون عايز اعرض النص     

//$(document).ready(function()
//{
	//var koko = $(".koko").html();
	//$(".toti").text( koko );
//});

// دي لما اكون عامل ديف وجواه اسبان وجو الاسبان دي نص ومديلو خواص و البرجراف ال تحتيه فاضي  وعيزه ياخد النص  ال في الاسبان بدون ما يفعل عليه الخواص
//$(document).ready(function()
//{
	//var koko = $(".koko").text();
	//$(".toti").html( koko );
//});

//$(document).ready(function()
//{
	//var koko = $(".koko").text();
	//$(".toti").text( koko );
//});

// ده لمايكون عندي حقل ادخال ومحددله الاسم بتاعه و النوع بتاعه و الفاليو انا مش كتبها وعايز اكتبها بلجكويري 
// "bilal7" دي لما تكون الفاليو فضيه  وعامل زرار و لما ادوس علي الزر ار اقوله طلعلي كلمة 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("input").val("bilal7");
	//});
	
//});

// bilalدي لما يكون عندي حقل ادخال وعايز لما ادوس علي الزرار يكتبلي كلمة  

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("input").val("bilal");
	//});
//});

// دي لما يكون في ديف فوق حقل الادخال وعايز لما ادوس علي الزرار يطلعلي النص ال مكتوب في الديف

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("input").val($("div").text() );
	//});
//});

// دي لما يكون في حقل ادخال  وعايز لما اكتب حاجه في حقل الادخال ده تتكتب في الدف ال تحته الا هو فاضي

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div.result").text($("input").val() );
	//});
	
//});

// دي لما اكون عايز اكت ب حاجه في حقل الادخال وعايزها تظهر في الدف ال فاضي وممكن اكتب في الديف ال فاضي عن طريق الجكويري  

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div.result").text("You Have Wrote: "+ $("input").val() );                دي الطريقه ان انا اكتب في الديف الفاضي عن طريق الجكويري// 
	//});
//});

// لما اكون عندي حقل ادخال وتحته لينك وعايز الاتربيوت بتاعة الينك تظهر في حقل الادخال 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("input").val($("a").attr("trget or href or class"));
	//});
//});

// لو انا عندي لينك وعايز اغير الاتربيوت بتاعة الينك دي من الجكويري 
//  دي لما اكون عايز اغير اتربيونت بي اتربيوت تانيه  ادوس علي الزرار يغيرلي الاتربيوت
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("a").attr("class","jquery");
        //or
        //$("a").attr("href","https://www.jquery.com");
	//});
//});

// ولو عايز اغير اكتر من اتربيوت في وقت واحد 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("a").attr(
        //{
            //"target":"xx",
            //"href":"https://www.jquery.com",
            //"class":"jquery"
        //});
	//});
//});

// لما كون عايز احط عناصر في صفحة الاتش تي ام ال بواسطة الجكويري 

// append                      // دي معناها الحاق العنصر بعنصر تاني 
// append                      // دي بيحط اي حاجه في اخر العنصر 
// دي لما يكون عندي ديف وعايز اضفله برجراب بواسطة الجكويري 
// ممكن احط اي حاجه مش لا زم برجراف بس ممكن احط اي حاجه 

//$(document).ready(function()
//{
	//$("div").append("<p>Hello</p>");       // ده لو دف فيه كلام بيجيب البرجراف تحت الكلام ده
//});

// prepend                             // دي بيحط اي حاجه في اول العنصر 


// دي لما يكون في ديق وجواه نص وعايز احط قبل النص ده برجراف او اي حاجه  

//$(document).ready(function()
//{
	//$("div").prepend("<p>Hello</p>");
//});

// befor          // دي لما اكون عايز احط عنصر قبل العنصر ال موجود في صفحة الاتش تي ام ال بواسطة الجكويري 

// html دي لما اكون عايز احط عنصر قبل العنصر ال موجود في صفحة 

//$(document).ready(function()
//{
	//$("div").befor("<p>Hello</p>");
//});

// after         // html دي لما اكون عايز احط عنصر بعد العنصر ال موجود في صفحة 

// html دي لما اكون عايز احط برجراف او اي عنصر بعد الديف ال موجود في صفحة  

//$(document).ready(function()
//{
	//$("div").after("<p>Hello</p>");
//});

  //<!-- Here Goes The Befor -->
        // <div>
         // <!-- Here Goes The Prepend -->
         //This Is Div
         //<!-- Here Goes The Append -->
       //</div>
      // <!-- Here Goes The After -->


// appendTo               // دي معناها الالحاق بي 
// دي لما اكون كاتب برجراف في الجكويري وعايز البرجراف ده يجي بعد الديف 

//$(document).ready(function()
//{
	//$("<p>Hello paragraph</p>").appendTo("div");
//});


//The PrependTo            // دي لما اكون عايز احط اي شئ قبل الديف 


// دي لما اكون عايز اجيب برجراف قبل الديف او اي شئ مش لا زم برجراف 

//$(document).ready(function()
//{
	//$("<p>Hello paragraph</p>").prependTo("div");

//});

// دي بتشيل العنصر بي ال جواه من الصفحه 
// remove                 // دي لما اكون عايز اشيل عنصر من الصفحه 


// دي لما يكون عندي زرار وادوس عليه اخليه يشيل العنصر من الصفحه 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div").remove();
	//});
//});

// دي لما اكون عايز اخفي ديف من الصفحه واخد كلاس معين 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div").remove(".koko");
	//});
//});

// empty            // دي بتفرغ محتوي العنصر 

// دي لما اكون عايز افرغ الديف او اي عنصر من المحتوى ال جواه 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div").empty(".koko");
	//});
//});


// addClass           // دي معناها اضافة كلاس للعنصر 
// ملوش كلا س ممكن اعمله كلا بالجكويري html دي لما يكون في عنصر في 
// واعمله خواص css وومكن انادي العنصر ال انا ادتلو كلاس بالجيكويري وانديه في صفحة 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").addClass("custom");
	//});
//});

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p, div, span")وممكن استخدم هنا اكتر من عنصر.addClass("custom br");   // ممكن ياخد اكتر من كلاس
	//});
//});

// toggleClass                    // وعايز اشيل  الكلاس علشان يلغي الخواص ديcss دي لما اكون مدي العناصر كلاسات معينه ومديهم خواص في صفحة 

//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("p").toggleClass("custom"); 
	//});
//});

// Dimensions        // دي معناها الابعاد 

// دي لما اكون عايز اجيب عرض الشاشه بتعتي 

//$(document).ready(function()
//{
	//var dw = $(document).width();
	//console.log(dw);
//});

// دي لما يكون عندي دف وعايز اجيب العرض بتاعه  

//$(document).ready(function()
//{
	//var div = $(".dim").width();
	//console.log("Your Div Width Is" + div + "px")       //ممكن اكتب رساله قبل الرقم وبعد الرقم  ال هيطلعلي في الكونسل 
//});

// الكود ده هو هو الكود ال فوق بس بطريقه تانيه 

//$(document).ready(function()
//{
	//$(".dim").click(function()
	//{
		//$(this).width();
		//console.log("Your Div Width Is" + $(this).width() + "px")
	//});
//});

// دي لما يكون عندي ديف له عرض معين وعايز اكبره في الجكويري 

//$(document).ready(function()
//{
	//$(".dim").click(function()
	//{
		//$(this).width(300);
       // $(this).width("+="+50);           // 50px دي معناها ان كل لما ادوس كليك علي العنصر يزوده
       // $(this).text($(this).width());     //دي لما اكون عايز اغير النص ال جوه الديف باي حاجه انا عايز اعملها
		//$(this).text("Your Div Width Is " + $(this).width() + "px"); ي لما اكون عايز اكتب رساله قبل الكلام وبعد الكلام 
       // console.log("Your Div Width Is" + $(this).width() + "px");
	//});
//});


// دي لما يكون في ديفين جنب بعض وعايز ازود اواحد منهم في العرض اخليه يزيد في العر ض وياخد من التاني نفس الحجم ال هيزيده 

//$(document).ready(function()
//{
	//$(".left").click(function()
	//{
		//$(this).width("+=" + 50);
		//$(".right").width("-=" + 50)
	//});
//});

// innerWidth               // يطبق عليها عاديwidth يعني ال بيتطبق علي  width الخصيه دي هيانفس خصية 

// outerWidth(true)        //  لخصيه دي بتجيب حجم الديف ال خارجي بتحسب اي خواص معموله للدف من ضمن الحجم بتاعه 

// height()               // دي لما اكون عايز اجيب طول الديف 

// innerHeight()        // دي بيجبلي حجم الديف في الطو ويحسب الخواص ال انا مدهاله مع الطول 
// outerHeight(true)   // لخصيه دي بتجيب حجم الديف ال خارجي بتحسب اي خواص معموله للدف من ضمن الحجم بتاعه بس بالطول 



// Traversing */       // الانتقال جوا الصفحه او الانتقال بين العناصر
// parent() */         // دي معناها الاب  
// دي لما يكون في عناصر جوه بعض وعايز اتحكم فيهم واغير في الخواص بتعتهم 
//$(document).ready(function()
	//{
		//$("span").parent().css("border","1px solid #00F");
	//});
///$(document).ready(function()
	//{
		//$("span").parent().css(
		//{
			//padding:'20px',
			//border: '1px solid #080',
			//width: '80%',
			//borderRadius: '10px'
		//});
	//});

// دي لما اكون عايز اطبق حاجه وتكون علي عنصر معين وميطبقش عل يعنصر تاني 

// parents("اكتب هنا العنصر ال انا عايز اطبق عليه او الكلاس");                     
//$(document).ready(function()
	//{
		//$("span").parents().css("border","1px solid #F00");
	//});

/**/

// parentsUntil (".top")                  // دي ممكن احددله مكان يقف عنده وميكملش بعد كده الخواص علي حاجه تانيه بعد كده

//$(document).ready(function()
	//{
		//$("span").parentsUntil(".top").css("border","1px solid #F00");
	//});


// children(".momo")   // دي لما اكون عايز اختار الطفل ال ليه اب دي بتختار العنصر ال  تحت العنصر على طول 
// دي بتنزل للعنصر ال بعديه علي طول بتنزل خطوه واحه 

//$(document).ready(function()
	//{
		//$("div").children(".momo").css("border","1px solid #F00");
	//});



// Find()                     // دي لما اكون عايز اجيب عنصرمن وسط العناصر عايز اعمل عليه خواص  
                            // دي بتنزل الي اخر العناصر  

//$(document).ready(function()
	//{
		//$("section").find("div").css("border","1px solid #F00");
	//});
    

//$(document).ready(function()
	//{
		//$("section").find("*").css("border","1px solid #F00"); دي بتختار كل العناصر تتطبق عليهم الخواص دي
	//});
    
    //$(document).ready(function()
	//{
		//$("section").find($("p:contains('Love')")).css("border","1px solid #F00"); دي لما يكون في برجرفات كتير وعايز اختار واحد منهم مكتوب فيه جمله معينه واختاره واخليه //Loveيطبق عليه الخواص ال انا عملها مثل 
	//});


// .siblings(.select)                                // دي معناها الاشقاء 
// دي لما اكون عايز اعمل خواص للديفات او البرجرفات ل جوه الاب واختار ديف اقله طبقلي الخواص دي علي الاشقاء ماعد انت  

//$(document).ready(function()
	//{
		//$("div:contains('Div 4')").siblings().css("border","5px solid #00F");
	//});


// دي لما اكون عايز اطبق الخواص علي عنصر واحد منهم 
//
//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).siblings(".select").fadeOut(2000);
		//});
//	});

// .next()                            //دي لما يكون في عناصر كتير ولما اجي ادوس علي عنصر اخليه يطبقلي حاجه اناعملها للعنصر ال تحتيه
// .next(".test") 
// ده مثال
// $(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).next().fadeOut(2000);
		//});
	//});



//prev()                 // دي بتجيب العنصر ال قبله تطبق عليه الخواص ال انا عملها
//.prev(".test")
// ده مثال
//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).prev().fadeOut(2000);
		//});
	//});



// .nextAll()        // دي لما يكون في عناصر كتي واهوز لما اجي علي واحد منهم يطبقلي خواص معينه علي كل العناصر ال تحتيه
// .nextAll(".test") 
//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).nextAll().fadeOut(2000);
		//});
	//});


//.prevAll()                // دي لمايكون في عناصر كتير واجي علي عنصر اتكه عليه اخليه يطبقلي خواص عالي العناصر ال قبليه
//.prevAll("test")
//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).prevAll().fadeOut(2000);
		//});
	//});


//.nextUntil(".test")                    /* لما يكون عندي عناصر وعايز اقوله لما اتكه علي عنصر منهم طبقلي الخواص دي علي الحناصر ال بعديه بس مش كلهم تقف عند عنصر معين
//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).nextUntil().fadeOut(2000);
		//});
	//});




//.prevUntil(".test")                //دي لما يكون في عناص كتير واجي ادوس علي عنصر اخليه يطبقلي الخواص ال انا عملها علي العناصر ال قبليه بس مش العناصر كلهم واخليه يقف عند عنصر معين

//$(document).ready(function()
	//{
		//$("div,p").click(function()
		//{
			//$(this).prevUntil().fadeOut(2000);
		//});
	//});



//.first()                         // دي لما يكون في عناصر كتيره وعايز اختار العنصر الاول يطبق عليه خواص انا عملها  

//$(document).ready(function()
	//{
		//$("div").first().css("border","5px solid #00F");
        //$("div").first().next().css("border","5px solid #00F");          دي بتجيب العنصر التاني ال بعد العنصر الاول تطبق عليه الخواص ال انا عملها
	//});

// .last()                       //دي لما يكون في عناصر كتير وعايز اختار العنصر الاخير واطبق عليه الخواص ال انا عملها
//$(document).ready(function()
	//{
		//$("div").last().prev().css("border","5px solid #00F");   دي بتختار العنصر ال قبل الاخير علشان تطبق عليه الخواص ال انا عملها
	//});

// .eq(0or1or2or3هنا بيقبل ارقام)
// .eq(هنا بيبدء الارقام من الصفر الى مشاء الله ) 
// .eq()                                      //دي لما يكون عند عناصر كتي وعايز اجيب اي عنصر  اطبق فيه الخواص ال انا عملها 
// .eq(-2 دي بيبدء الاختيار من تحت) 
//$(document).ready(function()
	//{
	//	$("div").eq(0).next.css("border","5px solid #00F");
	//});

//$(document).ready(function()
	//{
	//	$("div").eq(-2).prev.css("border","5px solid #00F");
	//});


//.filter(".jquery")                     //دي لما يكون في عناصر كتير وعايز اختار عنصر منهم اكون مديلو كلاس معين اخليه يعمل الخواص ال انا عملها عليه

//$(document).ready(function()
	//{
		//$("div").filter(".jquery").next().css("border","5px solid #00F");
	//});
//الكود ده هو هو الكود ال فوق
//$(document).ready(function()
	//{
	//	$("div").filter($(".jquery")).css("border","5px solid #00F");
	//});

//ممكن جوا الفلتر احط فانكشن كامله
//$(document).ready(function()
	//{
		//$("div").filter(function( bilal )
			//{
				//return bilal=== 1
			//}).css("border","5px solid #00F");
	//});

//.not()          //دي لما يكون في عناصر كتير وفيهم عناصر وخده كلاسات وانا عايز اعمل الخواص دي علي العناصر ال مش وخده اي حاجه 

//$(document).ready(function()
	//{
		//$("div").not().css("border","5px solid #00F");
	//});

//$(document).ready(function()
	//{
	//	$("div").not($(".jquery")).css("border","5px solid #00F");
	//});

// احط فنكشن كامله notممكن جو
//$(document).ready(function()
	//{
		//$("div").not(function( bilal )
			//{
				//return bilal=== 1
			//}).css("border","5px solid #00F");
	//});




// Selectors

// $("*"). 
// *                     //يعني كل حاجهAllدي معناها  
//دي معناها انا انا بقوله ان كل العناصر لما اتكا علي واحد منهم اخقيل العناصر كلها بما فيه العنصر ال انا اتكية عليه
//$(document).ready(function()
//{
	//$("*").click(function()
	//{
		//$(this).fadeOut(500);
	//});
//});

//bodyدي معناها ان انا بقوله اعملي الخواصدي علي اي عنصر في الصفحه ما عدا 
//$(document).ready(function()
//{
	//$("body *").css("border","2px solid #00F");
//});


//$(".bilal,ahmed")                      //دي لما اكون عايز اكت اكتر من كلاس  وعايز يطبق عليهم الخواص ال انا عملها
//$(document).ready(function()
//{
	//$(".bilal,ahmed").css("border","2px solid #00F");
//});


//دي لما يكون عندي برجرفات كتير و عايز اختار العنصر الاو من البرجرفات يطبقلي عليه الخواص ال انا عايز اعملها
//$(document).ready(function()
//{
	//$("p:first").css("border","2px solid #00F");
//});

// دي لما اكون عايز اختار اكتر من عنصر
//$(document).ready(function()
//{
	//$("p:first, div:last, aside:last").css("border","2px solid #00F");
//});

// دي لما اكون عايز اختار اكتر من عنصر
//$(document).ready(function()
//{
	//$("p, .bilal, aside:last").css("border","2px solid #00F");
//});


//دي بتستخدم في الجداول 
//لما اكون عايز الون العنصر الاو ويفوت التاني ويلون التالت وهاكذا
//$(document).ready(function()
//{
	//$("div:even").css("border","2px solid #080");
//});


//دي لما اكون عابز الون العنصر التاني وافوت الاول ولون العنصر الرابع وافوت التالت وهاكذا
//$(document).ready(function()
//{
	//$("div:odd").css("border","2px solid #080");
//});



//دي بيجبلي اول عنصر من العناصر ويديلو الخواص ال انا عملها
//$(document).ready(function()
//{
	//$("p:first").css("border","5px solid #F00");
//});


// دي بتجيب اول عنصر ليه اب وتعمله الخواص ال انا عملها
//$(document).ready(function()
//{
	//$("p:first-child").css("border","5px solid #F00");
//});


// دي معناها ان اول طفل نوعه برجراف اعمله التنسقات ال انا عملها
//دي لما يكون في ديف وتحتيه برجراف وتحتيهم ديف جواه ديف تحت الديف ده برجراف وانا عايز انسق اول برجراف من نوعه في الصفحه  هينسق البرجراف ال تحت الديف الاول وهينسق البرجراف ال في الديف الاول وتحتيه ديف 
// /$("p:first-of-typeدي معناهاالبرجراف الاول من نوعه").          
//$(document).ready(function()
//{
	//$("p:first-of-type").css("border","5px solid #F00");
//});


//دي لما اكون عايز انسق اخر برجراف طفل في الصفحه من نوعه 
// دي معناها ان اخر عنصر نوعه برجراف
//$(document).ready(function()
//{
	//$("p:last-of-type").css("border","5px solid #F00");
//});



//دي لما اكون عايز الون برجراف اقوله  اديلو الخواص دي لتاني طفل في الصفحه نوعه برجراف
//$("p:nth-child(2)")

//$(document).ready(function()
//{
	//$("p:nth-child(2)").css("border","5px solid #F00");
//});


//$(document).ready(function()
//{
	//$("p:nth-child(2)").next().css("border","5px solid #F00"); دي لما اكون عايز العنصر ال بعده
//});


//دي لما اكون عايز اختار العناصر من الاخر الى الاول
//$(document).ready(function()
//{
	//$("p:nth-last-child(2)").css("border","5px solid #F00");
//});


//دي معناها تاني طفل من نوع البرجراف
//$("p:nth-of-type(2)")         // اول حاجه انا عايز برجراف ويكون الطفل التاني من الاب ويكون نوعه برجراف
//$(document).ready(function()
//{
	//$("p:nth-of-type(2)").css("border","5px solid #F00");
//});

//لما اكون عايز اجيب العناصر من الاخر الى الاول
//$(document).ready(function()
//{
	//$("p:nth-last-of-type(2)").css("border","5px solid #F00");
//});



//$("p:only-child").    //دي لما اكون عايز اختار برجراف يكون الطفل الوحيد للاب بتاعه

//$(document).ready(function()
//{
	//$("p:only-child").css("border","4px solid #00F");
//});


//$("p:only-of-type").             // دي بيختار الصفل الاول من الاب بتاعه بيس يكون  من نفس النوع ال هو برجراف او اي حاجه تانيه بس لازم يكون يكون الطفل الوحيد
//$(document).ready(function()
//{
	//$("p:only-of-type").css("border","4px solid #00F");
//});

//$("div > p")        //دي بقوله ادي الخواص دي للبرجراف ال بعد الديف علي طول
//دي لما اكون عايز ادي خواس لبرجراف الاب بتاعه ديف 
//$(document).ready(function()
//{
	//$("div > p").css("border","4px solid #00F");
//});


//$("div p")                     //دي لو في برجرافات جوه ديفات او سكشنات او اسبان وعايز ادلهم خواص 
//$("div p")                    //دي بتدي الخواص ال انا عملها لكل البرجرفات 
//$(document).ready(function()
//{
	//$("div p").css("border","4px solid #00F");
//});


//$("div + p")           //دي معناها انا عايز ديف يكون العنصر ال بعديه برجراف

//$(document).ready(function()
//{
	//$("div + p").css("border","4px solid #00F");
//});

//$(document).ready(function()
//{
	//$("div + p").next().css("border","4px solid #00F");دي لما اكون عايز اجيب العنصر ال بعديهم
//});


//$("div ~ p").        //دي لما اكون عايز اجيب البرجراف ال هو شقيق للديف
// بس لازم يكونو من نفس الاب
//$(document).ready(function()
//{
	//$("div ~ p").next().css("border","4px solid #00F");
//});




//دي لما يكون في لستة لنكات وعايز اختار واحد منهم يتعمل عليه خواص انا عملها 
//$("ul li:eq(1)")
//$(document).ready(function()
//{
	//$("ul li:eq(1)").next().css("border","4px solid #00F");
//});

//$("ul li:gt(1)")                   //دي يعني اكبر من حاجه وانت طالع اعملهم الخواص ال انا عملها دي


//دي مهناها انه ابدء من بعد الواحد واعملي الخواص دي علي العناصر ال بعديه
//$(document).ready(function()
//{
	//$("ul li:gt(1)").css("border","4px solid #00F");
//});


//$("ul li:lt(5)").                   //دي لما يكون في عناصر وعايزه يبدء من تحت يفوت كذا عنصر وبعد كده يطبق الخواص ال انا عملها علي العناصر ال فوقهم
//$(document).ready(function()
//{
	//$("ul li:lt(5)").css("border","4px solid #00F");
//});


//$("ul li:not(:contains('5'))")               //دي لما يكون عندي عناص وعايز اطبق عليهم خواص ماعد اعنصر واحد انا مش عايز الخواص دي تطبق عليه
//5دي هينسق كل حاجه ماعد ال مكتوب فيها رقم
//$(document).ready(function()
//{
	//$("ul li:not( :contains('5'))").css("border","4px solid #00F");
//});


//لما يكون في هيدر وعايز اديلو خواص
//$(":header")
//لما يكون في هيدرز كتير في الصفحه وعايز اديلهم نفس الخواص
//$(document).ready(function()
//{
	//$(":header").css("color","#00F");
//});



//دي لما يكون عندي انيميشن وعايز لما اتكا علي الهيدنج يغيرلي لون الخلفيه ولون الخط
//$(":animated").
//$(document).ready(function()
//{
	// Animate The Div
	//$("div").animate({width:'500px'}, 5000);
	//$("div").animate({height:'300px'}, 8000);
	// Click On H1 To Change Colors Of The ANimated Div
	//$("h1").click(function()
	//{
		//$(":animated").css({background:'#F00', color:'#FFF'})  ديمعناها ان كل الخواص ال بتتحرك في الصفحه هيتغيرله الخلفيه ولون الخط
	//});
	
//});


//لما يكون عندي حقل ادخال  ومعمول له فوكس ان الشخص ال هيدخل الموقع هيجبله حقل الادخال ده علي طول يكتب فيه وان عايزه لما يتعمله فوكس يعمل خواص انا هعملهاله
//$(":focus")

//$(document).ready(function()
//{
	//$("input[type='text']").focus();
	//$(":focus").css("padding","20px");
//});

//دي لما يكون عندي عناصر وعايز وعايز عنصر مكتوب فيه كلمه معينه مش مكتوبه في بثية العناصر يتعمله خواص مختلفه غير العناصر التانيه
//$("div:contains(kaka)")
//$(document).ready(function()
//{
	// Animate The Div
	//$("div:contains(kaka)").animate({width:'500px'}, 8000).css("background","#F00");
	
//});


//$("div:has('p')")                // دي معناها ان انا بقوله اناعايز ديف جواه برجراف اعمله الخواص دي
//$(document).ready(function()
//{
	//$("div:has('p')").css({"color","#080"})
//});



//دي لما يكون عندي عناصر فضيه وعايز ادلهم خواص 
//$(":empty")
//$(document).ready(function()
//{
	//$(":empty").css("background","#080");
 //});


//$(":parent")                  //دي يعني عنصر له اطفال 
//دي لما يكون العنصر جواه عناصر وعايز انسق العناصر ال جواها عناصر و العناصر الفضيه ماتتنسقش 
//$(document).ready(function()
//{
	//$(":parent").css("border","1px solid #F00");
 //});

//$(":hidden")     //دي لما اكون خافي عناصر في الصفحه ولما ادوس علي الزرار تظهر العناصر المختفيه
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(":hidden").fadeIn(2000);   دي بقوله اظهرلي العناصر المخفيه 
	//});
//});


// visibility:hidden; ومبتشتغل مع خصية display:none; الخصيه دي بتشتغل معا


//$(":visible").        // دي لما اقوله كل العناصر الظاهره  لما اتك علي الزرار اعملها الخواص دي
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$(":visible").css("background","#F00");
	//});
//});

// وممكن احدد عناصر هيا ال يتعملها الخواص دي
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div:visible").css("background","#F00");
	//});
//});



//ددي لما يكون في عناصر ظهره وعناصر مخفيه ولما اتكا على الزرار يظهر المخفي ويخفي الظاهر 
//$(document).ready(function()
//{
	//$("button").click(function()
	//{
		//$("div:visible").slideToggle(1000);
		//$("div:hidden").slideToggle(1000);
	//});
//});



//$(":root").                       //دي معناها الجذور 

//$(":root").                       //html دي بختار عنصر

//htmlدي لما اكون عايز اعمل خواص لعنصر 
//$(document).ready(function()
//{
	//$(":root").addClass("js");
//});


//دي لما يكون عندي برجرافين واحد عربي و التاني انجليزي وعايز ادي واحد منهم خواص تانيه عن التاني
//$("p:lang('en')").
//$(document).ready(function()
//{
	//$("p:lang('en')").css("color","#F00");
//});


//لما يكون عندي صور كتير وعايز اختار وحده منهم اعمل عليها خواص مختلفه عن الاخرين 
// $("[src]")                          // دي طريقة كتابة الكود

//$("[src]")  //Slector                //دي لما اكون عايز انادي الصور ال ليهم سورس علشان اطبق عليهم الخواص
//$("[title]")  //Slector              //اعملها الخواص ديtitleدي لما اقوله الصور ال ليها 
//.css("borderRadius","50%");  //Effect
//دي طريقة كتابة الكود
//$(document).ready(function()
//{
	//$("[src]").css("borderRadius","50%");
//});


//$("[alt='Image 2']").     //وعايز اعملها تنسيق بالجيكويري  alt="Image 2" دي لما يكون عندي صوره ال
//طبقلي عليها الخواص ديalt = "Image 2"دي معناها ان اي صوه ليها 
//$(document).ready(function()
//{
	//$("[alt='Image 2']").css("borderRadius","50%");
//});

//$("p[lang]")            //دي لما يكون عندي برجراف واخد اتربيوت معينه وعايز انديه بلاتربيوت الخاصه به علشان ياخد الخواص ال انا عملهاله
//$(document).ready(function()
//{
	//$("p[lang]").css("color","#00F");
//});

//دي لما يكون عندي ديف واخد اتربيوت معينه والاتربيوت دي واخده اسم يميزها عن الاخرين وعايز انديها بالديف و الاتربيوت ال واخد اسم مميزه عن الاخرين
//$(document).ready(function()
//{
	//$("div[lang='ar']").css("color","#00F");
//});

// !=            // دي معناها لا يساوي

//دي لما يكون عندي عناصر كتير ووخدين اتربيوت مختلفه وعايز الونهم ماعدا واحد 
//$(document).ready(function()
//{
	////$("div[lang!='ar']").css("color","#00F");    //$("div[lang!='ar']") دي معناها ان يلوناي اي عنصر مش واخد الاتربيوت دي
//});


//$("[titel], [lang]").fadeOut(1000);   //دي اما يكون عندي عناصر وهتكون متشابها في الخواص ال انا هعملهلهم ممكن اعملهم في جروب

//$(document).ready(function()
//{
	//$("[titel], [lang]").fadeOut(1000);
//});


//دي لما اكون عايز اعمل جروب لعناصر هتاخد نفس التنسيق وانديهم بنفس الاتربيوت والاسم ال وخده الاتربيوت
//$(document).ready(function()
//{
	//$("img[alt='image 3'], div[lang='ar'], p[lang='en']").fadeOut(1000);
//});

//$("img[alt*='My']                    //دي معناها انه بقوله دور علي العنصر ال واخد اتربيوت ويكون واخد اسم كبير وعايز انديه بكلمه مميزه من الاسم الكبير ده اكتب نجمه بعد الاتربيوت
//دي لما يكون عنصر واخد اتربيوت وعايز انديه باسم معنين من الاسم ال وخده الاتربيوت

//$(document).ready(function()
//{
	//$("img[alt*='My'], div[lang='ar']").fadeOut(1000);  //دي معناها ان العنصر ال واخد اتربيوت والاتربيوت واخد اسم كبير واعيز انديه بحاجه مميزه في الاسم ال وخده الاتربيوت
//});

//ده شرح الكود
/*
** Img = Selector      //ده العنصر
** Title = Attribute   //ده الاتربيوت
** * = contains        //دي معناها تحتوي علي //            يعني  دورلي علي الكلمه دي هل موجوده في الام ام لا
** bilal = Attribute Value // دي القيمه ال بيخدها الاتربيوت
*/

//~                              // دي بتطلب الاسم الاول ال وخده الاتربيوت علشان تديلو الخواص ال انتا عملها 
// *                             //دي بتدور علي الكلمه ال انا كتبها في وسط الاسم وتديلو الخواص ال انا عملها
//^                              //دي بدور علي اول كلمه بسTest دي لما اكون عايز اقوله انعايز كلمه تبدء بكلمة 
//$("img[alt^='Test']
//$(document).ready(function()
//{
	//$("img[alt^='Test'], div[lang='ar']").fadeOut(1000);
//});

//شرح الكود 

//[attribute] => [title]

// element[attribute] => img[src]

// element[attribute='value] => p[lang='en']

// element[attribute!='value'] => div[lang!='ar']

// elemen[attribute*='value'] => s[href*='link']

// elemen[attribute~='value'] => s[href~='Contains']

// elemen[attribute^='value'] => s[href~='Start']



// $(":text")               //دي بيختار حقل الادخال بتاع النص
// لما اكون عايز انسق حقول الادخال عندي في الصفحه بالجكويري
//$(document).ready(function()
//{
	//$(":input").css("display","block");
//$(":text").click(function()
	//{
		//$(this).fadeOut();
	//});
//دي لما يكون حقل الادخال جوه ديف وعايز انا ديه علشان يعمله الخواص ال انا مد هاله
//$("div :text").click(function()
	//{
		//$(this).fadeOut();
	//});

//});




// Start Events Reference


//ولما اشيل الموس من عليه يرجع زاي مكان ويشيل الكلاسcss و يديلو الخواص ال انا عملها للكلاس دي في الcolorدي معناها ان انا لما اروح بالموس علي الديف يحطله كلاس اسمه 
	//$(".normals").mouseenter(function()
	//{
		//$(this).toggleClass("color");
	//});
    //$(".normals").mouseleave(function()
	//{
		//$(this).toggleClass("color");
	//});
//});





/*global $*/                    //دي بتنكتب في اول صفحة الجيكويري
//$(function()
//{
	//"use strict"; //For Js Lint Errors
//});


//Bind                       //دي بتفدنا اننا نحط حدث علي العناصر
// syntax Bind ( Event, Data, Function, Map )
// Event : Required, Data : Optional, Function:Required


//ودي طريقة كتابة الكود بتاعهاBindدي لما اجي استخدم ال 
//$(".normals").bind("click", function()
//$("هنا بكتب الكلاس ").bind("هنا بكتب الحدث", function())

// ممكن اعمل اكتر من حدث في وقت واحدbind ايه ميزة استخدام 

	//$(".normal").bind("هنا بكتب اكتر من حدث وبفصل مبنهم بمسافه", function()
	//{
		//$(this).toggleClass("color");//دي معناها انه لما اروح عليها بالموس يضيف الكلاس ويضيف الخواص ال انا عملها للكلاس ولما اشيل الموس يرجع زاي مكان ويشيل الكلاس
	//});
//});

//دي طريقة كتابة الكود

	//$(".normal").bind("mouseenter mouseleave", function() // دي معناها ان انا هروح عليه بالموس واشيل من عليه الموس 
	//{
		//$(this).toggleClass("color"); //دي معناها انه لما اروح عليها بالموس يضيف الكلاس ويضيف الخواص ال انا عملها للكلاس ولما اشيل الموس يرجع زاي مكان ويشيل الكلاس
	//});
//});

//هنا استخدمة حث واحد
//$(".normals").bind("click", function()
	//{
		//$(this).hide();
	//});

//هنا استخدم اكتر من حدث
	//$(".normals").bind("mouseenter mouseleave", function()
	//{
		//$(this).toggleClass("color");
	//});
//});


// Event Map                        //دي معناها ان كل حدث ليه فنكشن انا بعمله 
//دي شرح الكود
	//$(".map").bind({
		//click: function () {هنا هكتب الحدث ال هيحصل بعد ما عمل كليك علي العنصر}
	//});
//});

//دي طريقة كتابة الكود
//دي معناها ان انا لما تكا علي العنصر غيرلي النص ال جوه العنصر بالنص ال انا كتبه ده
//$(".map").bind({

//click: function () {$(this).text("You Have Clickedme"); },                   // , ده اول حدث اعمله علي العنصر علشان اعمل حث تاني لازم افصل مابين الحدث بعلمة
//dblclick: function () {$(this).text("You Have Double Clicked Me"); },  // ده الحدث التاني بقوله لما ادوس دبل كليك غيرلي النص ال في العنصر ال انا مختاره وحط النص ال انا كتبه ده
//mouseenter: function () {$(this).text("You Have Mouse One Me")},        //ده الحدث التالت دي بقوله لما اروح بالموس علي العنصر ال فيه النص اقوله غيرلي النص ده بالنص ده
//mouseleave: function () {$(this).text("The Mouse Has Gone");}      //ده الحدث الرابع بقوله لما شيل الموص من  علي العنصر غيرلي الكلام ال في العنصر للكلام ال انا كتبه ده
    //});
//});



// Custom Event


// Custom Event
//ده شرح الكود
	//$("هنا بكتب الكلاس بتاع العنصر").bind("هنا بكتب اسم الحدث", function (هنا بكتب البراميترز و الحدث )
	//{
        //  هيخلي الخصيه ديه زاي البراميترزtriggerدي هيخلي الخصيه  دي لما اعملها   
		//$(this).بكتب هنا الخصيه ال عليز اعملهاheight( هنا بكتب البراميترز هجيب الخواص بتعته ازاي هجبها من الكود ال تحت ال بكتب فيه قيمة البرميترز ); 
	//});

	//$("هنا بكتب العنصر ال تحتيه").click(function()  //  علشان لما ادوس علي العنصرده هيحولي الكلاس بتاع العنصرللحدث ال انا هعمله
	//{
                                             //("هنا بكتب الحدث", [""])
		//$("هنا بكتب اسم الكلاس بتاع العنصر ").trigger ("myCustomsEvent", ["هنا بكتب قيمة البراميترز"]);
	//});

//.trigger         //دي معناها تشغيل


//دي طريقة كتابة الكود
	// Custom Event With Design
	//$(".custom-event").bind("myCustomsDesign", function (event, myHeight )
	//{
		//$(this).height(myHeight);
	//});

	//$("a").click(function() 
	//{
		//$(".custom-event").trigger("myCustomsDesign", ["400px"]);
	//});
//});

//دي لما اكون عايز اعمل اكتر من برميترز في وقت واحد
//دي معناها ان انا بقوله لما ادوس علي الينك خلي العنصر ال انا مختاره يزيد طوله وعرضه ويغير لون الخلفيه ولون الخط في وقت واحد
// Custom Event With Design
	//$(".custom-event").bind("myCustomsDesign", function (event, myHeight, myWidth, myBack, myColor )
	//{
	//	$(this).height(myHeight).width(myWidth);
    //  $(this).css({
			//backgroundColor: myBack,
			//color: myColor
		//});
	//});

	//$("a").click(function() 
	//{
		//$(".custom-event").trigger("myCustomsDesign", ["200px", "800px", "#00F","#FFF"]);
	//});
//});



// Event Reference => Live

// syntax live ( Event, Data, Function )
// Event : Required, Data : Optional, Function:Required

//$(function()
//{
	//"use strict"; //For Js Lint Errors
//دي معناها ان اانا عايز اخفي العنصر ده
    //$(".normals").live("click", function()
	//{
		//$(this).hide();
		//});
//دي لما ادوس علي الزرار هخليه يضفلي في الصفحه عنصر البرجراف
		//$("button").click(function()
		//{
			//$("<p>This Is Created Paragraph</p>").insertAfter($(this));
		//});
//دي لما اكون عايز لما اتكا علي البرجراف يختيفي بس مش هيخفي العنصر بتاع البرجراف ال هينضاف عب الجكويري
		//$("p").click(function()
		//{
			//$(this).hide();
		//});
	//});



//$(function()
//{
	//"use strict"; //For Js Lint Errors
//دي معناها ان اانا عايز اخفي العنصر ده
	//$(".normals").live("click", function()
	//{
		//$(this).hide();
		//});
//دي لما ادوس علي الزرار هيضفلي برجراف في الصفحه
		//$("button").live("click", function()
		//{
			//$("<p>This Is Created Paragraph</p>").insertAfter($(this));
		//});
//دي لما اكون عايزاخي البرجراف ال في الصفحه و البرجراف ال ضفته بالجيكويري 
		//$("p").live("click",function()
		//{
			//$(this).hide();
		//});
//دي لمااكون عمل حقل ادخال وعايز لما ادوس عليه يكررلي حقل الادخال ده مره تانيه ولما ادوس علي الجديد يكرر الحقل تاني وكل لما ادوس يفضل يكرره
//$(".input-file span").live("click", function()
		//{
			//$("<input type='file'><span>+</span>").insertAfter($(this));
		//});
	//});


// Event Reference => Delegate

// syntax Delegate ( Child Selector, Event, Data, Function )
//دي طريقة كتابة الكود
//$(function()
//{
	//"use strict"; //For Js Lint Errors

	//$("body"). delegate(".normals","click", function()
	//{
		//$(this).hide();
		//});

		//$(document).delegate("button", "click", function()
		//{
			//$("<p>This Is Created Paragraph</p>").insertAfter($(this));
		//});
		//$(document).delegate("p", "click",function()
		//{
			//$(this).hide();
		//});
		//$(".input-file").delegate("span", "click", function()
		//{
			//$("<input type='file'><span>+</span>").insertAfter($(this));
		//});
	//});





//دي ال هنشتغل بيها علي طول 
// Event Reference => On
// syntax On ( Event, Child Selectorده اختياري , Data, Function, Map )



// Single Event With On       دي لما اكون عيز اعمل حدثر واحد
//شرح الكود
//$("هنا بكتب الكلاس بتاع العنصر").on("اهنا بكتب الحدث", function()



// Multi Event With On               // لما اكون عايز اعمل اكتر من حدث
	//$("بكتب هنا الكلاس بتاع العنصر").on("هنا بكتب اكتر من حدث وبفصل ما بنهم بمسافه", function ()



//Custom Event Wit On     //دي بتستخدم لما اكون عايز اعمل اكتر من حدث في وقت واحد
//شرح الكود
//$("هنا بكتب الكلاس بتاع العنصر ").on(" هنا بكتب اسم الايفنت ", function(بكتب البراميترز ال هيا الحاجه ال انا عايز اعملها)
//$(".bibob").on("myBibob", function(event)





//ده شرح الكود
	//$("الكلاس بتاع العنصر").on(" مثلاmyBibob وهنا بكتب الحدث ال انا عيزه ال هو", function( , وهنا بكتب الحدثووممكن اكتب اكتر من حدث وافصل مبنهم بالعلامه دي )
		//{
			//$(this).height(myHeight).width(myWidth);  //. دي هنا ممكن اكتب اكتر من حدث وافصل مبنهم بعلامة
		//});
		//$("وهنا بكتب الحاجه ال هدوس عليها علشان تعمل الحدث ال انا عايزه").on("click",function()
		//{
                                     //.triggerدي معناها تشغيل 
			//$("هنا بكتب الكلاس بتاع العنصر").trigger(" , مثلاوممكن اكتب قيم للطو و العرض هنا وافصل مابنهم بعلامةmyBibob وهنا بكتب الحدث ال انا عيزه ال هو ");
                                            //("هنا بعد ما يشغل بقوله نفز الخواص دي علي العنصر ال انا عايز يتعمل عليه الخواص")
		//وفي مثال تحت موضح بذالك
        //});







//Custom Event Wit On         //دي بتستخدم لما اكون عايز اعمل اكتر من حدث في وقت واحد
//ودي طريقة كتابة الكود ال هو مشروح فوق
			//$(".bibob").on("myBibob", function(event, myHeight, myWidth,myBack,myColor)
		//{
			//$(this).height(myHeight).width(myWidth);
			//$(this).css({
				//backgroundColor: myBack,
				//color: myColor
			//});
		//});
		//$("button").on("click",function()
		//{
			//$(".bibob").trigger("myBibob", ["200px", "400px", "#00F", "#FFF"]);////("هنا بعد ما يشغل بقوله نفز الخواص دي علي العنصر ال انا عايز يتعمل عليه الخواص")
		//});

	//});







// Event Map           //دي معناها ان كل حدث ليه فنكشن انا بعمله 


//$(".maps").on(
//{
//click:function () {$(this).text("you Have Clicked Me");},             // , ده اول حدث اعمله علي العنصر علشان اعمل حث تاني لازم افصل مابين الحدث بعلمة
//dblclick: function () {$(this).text("You Have Double Clicked Me"); }, // ده الحدث التاني بقوله لما ادوس دبل كليك غيرلي النص ال في العنصر ال انا مختاره وحط النص ال انا كتبه ده
//mouseenter: function () {$(this).text("You Have Mouse One Me")},      //ده الحدث التالت دي بقوله لما اروح بالموس علي العنصر ال فيه النص اقوله غيرلي النص ده بالنص ده
//mouseleave: function () {$(this).text("The Mouse Has Gone");}         //ده الحدث الرابع بقوله لما شيل الموص من  علي العنصر غيرلي الكلام ال في العنصر للكلام ال انا كتبه ده
//});








//شرح الكود
//دي علشان لما اجي اضيف عنصر بطريقة الجكويري
//$("هنا بكتب العنصر ال انا لما اتكا عليه هيعملي حاجه").on("click", function()
		//{
			//$("هنا بكتب الحاجه ال انا عيزها تطلع لما يتكا علي العنصر").insertAfter($(this)) ;

            //insertAfter($(this)//دي معناها ان يحطلي العنصر ال انا كتبه ده بعد العنصر الاول
        //});






//لما اكون عايز اخفي العنصر ال انا عامله بلجكوير
//$("هنا بكتب الاب بتاع العنصر").on("click", "وهنا بكتب العنصر او الكلا س بتاعف", function()
		//{
			//$(this).fadeOut(1000); //1s دي معناها انه هيخفي العنصر في 
		//});

//دي طريقة كتابة الكود ال هو مشروح فوق

//$("body").on("click", "p", function()
		//{
			//$(this).fadeOut(1000);
		//});











//دي طريقة كتابة الكود
//$(function()
//{
	//"use strict"; //For Js Lint Errors
// Single Event With On       دي لما اكون عيز اعمل حدثر واحد
//دي لما اكون عايزه لما اتكا علي العنصر يختفي
	//$(".normals").on("click", function()
	//{
		//$(this).hide();
		//});







	// Multi Event With On               // لما اكون عايز اعمل اكتر من حدث

//color ولما اشيل الموس يشيل الكلاس color دي معناها اانا انا لما اروح علي العنصر ده حطله كلاس اسمه
	//$(".bibo").on("mouseenter mouseleave", function ()
	//{
		//$(this).toggleClass("color");
		//});








       //Custom Event Wit On        //دي بتستخدم لما اكون عايز اعمل اكتر من حدث في وقت واحد
		//$(".bibob").on("myBibob", function(event, myHeight, myWidth,myBack,myColor)
		//{
			//$(this).height(myHeight).width(myWidth);
			//$(this).css({
				//backgroundColor: myBack,
				//color: myColor
			//});
		//});
		//$("button").on("click",function()
		//{
			//$(".bibob").trigger("myBibob", ["200px", "400px", "#00F", "#FFF"]);//("هنا بعد ما يشغل بقوله نفز الخواص دي علي العنصر ال انا عايز يتعمل عليه الخواص")
		//});






// Event Map          //دي معناها ان كل حدث ليه فنكشن انا بعمله 
		//$(".maps").on(
		//{
			//click:function () {$(this).text("you Have Clicked Me");},
			//dblclick: function () {$(this).text("You Have Double Clicked Me"); },  
			//mouseenter: function () {$(this).text("You Have Mouse One Me")},       
			//mouseleave: function () {$(this).text("The Mouse Has Gone");} 
		//});





// Future Elrments Event With On
//دي لما اكون عايز اتكا علي عنصر واخليه بعد ما اتك عليه يحطلي برجراف بعديع
		//$("button").on("click", function()
		//{
			//$("<p>This Is Created P</p>").insertAfter($(this)) ;
		//});


//1s هنا بقوله لما تيجي تتكا علي البرجراف اعمله الخواص دي ال هو اخفيه في 
		//$("body").on("click", "p", function()
		//{
			//$(this).fadeOut(1000);
		//});

	//});





//Event Reference => PreventDefault, isDefaultprevented

//PreventDefault    //دي معناها امنع الافتراضي
//PreventDefault    // يعني لما اعمل فنكشن وعيزها تتطبق علي عنصر لما اتكا عليه الخصيه دي بتمنع الفنكشن دي لما اتكا علي العنصر 

//شرح الكود
 //$(function()
//{
                                                                                  //function(هنا بكتب الحدث ال هيطبق علي الينك)
	//"use strict"; //For Js Lint Errors$("هنا بكتب العنصر او الكلاس بتاعه").on("هنا بكتب الحدث", function(event){
		//event.preventDefault();//دي معناها انا انا بقول للنك لما ادوس عليك ما تروحش علي الينك ده واظهرلي الصوره
		//$("هنا بختار العنصر ال هيتعمل عليه الحدث").fadeIn(500);
	//});

//});

//ده الكود ال مشروح فوق
 //$(function()
//{
	//"use strict"; //For Js Lint Errors
	//$("a").on("click", function(event)
	//{
		//event.preventDefault();
		//$("img").fadeIn(500);
	//});

//});



//isDefaultprevented

//هنا بقوله لو الحدث ممنوع  الافتراضي طلعلي الرساله دي
// $(function()
//{
	//"use strict"; //For Js Lint Errors
	//$("a").on("click", function(event)
	//{
		//event.preventDefault();// هنا بقوله امنعلى الحدث الافتراضي
		
       //هنا بقوله لو الحدث ممنوع  الافتراضي طلعلي الرساله دي
        //if (event.isDefaultPrevented()) {
			//$("div").text("The Link Will Not Work");
		//} else//دي معناها غير كد 
		//{
            //دي معناها ان الحدث شغال عادي و مشمعموله الغاء هيطلعلي الرساله دي والينك هيفتح لصفحه ال انا عيزها 
			//$("div").text("The Link Will Go To Google");
		//}
	//});

//});





//Event Reference => KeyDown, KeyPress, KeyUp

// KeyDown       //دس لما اشيل ادي من علي الزرار بتاع الكيبورد يكتب الحرف            

//دي لما يكون عندي حقل ادخال ولما اجي اكتب فيه واكتب اول حرف يطلعلي رساله
 //شرح الكود
//$(function()
//{
	//"use strict"; //For Js Lint Errors

	//$("هنا بكتب العنصر او الكلاس").on("هنا بكتب الخصيه", function () {
		//$("هنا بكتب العنصر ال هيتعمل عليه الخصيه ").text("هنا بكتب الرساله ال انا عيزها تظهر لما اكتب اول حرف")
	//});

//});
//ده الكود ال مشروح فوق
 //$(function()
//{
	//"use strict"; //For Js Lint Errors
	//$("input").on("keydown", function () {
		//$("div").text("you Are Going To Click The keyboard Key")
	//});

//});




//KeyPress      //دي معناها لما اتكا علي الزرار
//دي لما ادوس علي زرار الكيبورد طلعلي الرساله دي
	//$("input").on("keypress", function()
	//{
		//$("div").text("You Are Pressed The Keyboard Key")
	//});

//});




// KeyUp        //دي لما ابعد عن الزرار بتاع الكيبورد

//دي لما يشيل ايده من علي الزرار بتاع الكيبورد طلعلي الرساله دي ال انا كتبها
//$("input").on("keyup", function()
	//{
		//$("div").text("You Are Far Away From Key")
	//});
//});


//ده الكود كامل بالثلاث خواص ال مشروحين فوق 


 //$(function()
//{
	//"use strict"; //For Js Lint Errors
	//$("input").on("keydown", function () {
		//$("div").text("you Are Going To Click The keyboard Key")
	//});
	//$("input").on("keypress", function()
	//{
		//$("div").text("You Are Pressed The Keyboard Key")
	//});
//$("input").on("keyup", function()
	//{
		//$("div").text("You Are Far Away From Key")
	//});
//});



//دي لما يكون عندي حقل ادخال و تكست اريا وعايز لما اتب فيهم حاجه تتكتب علي طول في االهد ال تحتيه و البرجراف
 //$(function()
//{
	//"use strict"; //For Js Lint Errors

//$("input").on("keyup", function()
	//{
		//$("div h4").text($(this).val())
	//});

//$("textarea").on("keydown", function()
	//{
		//$("div p").text($(this).val())
	//});

//});




//Event Reference => Change

//Change           //دي لما اجي اكتب وخلص كتابه وبعدين اروح علي عنصر تاني الكتابه تظهر 


 //$(function()
//{
	//"use strict"; //For Js Lint Errors

//$("input").on("change", function()
	//{
		//$("div h4").text($(this).val())
	//});

//$("textarea").on("change", function()
	//{
		//$("div p").text($(this).val())
	//});

//});




//Event Reference => Blur, Focus



// Focus             //دي معناها ان انا لما اروح علي عنصر واقف عليه دي معناه فوكس
//ده الكود
//$(function()
//{
	//"user strict"; // for Js Lint Errors
	//$("input").on("focus", function()
	//{
		//$(".notic span").fadeIn(1000, function()
			//{
				//$(this).fadeOut(2000)
			//}).text("You Are Focusing In The Input");
	//});
//});




//Blur               //دي معناها لما ابعد عن االعنصر امل حاجه انا هكتبها
//ده الكود
//$(function()
//{
	//"user strict"; // for Js Lint Errors
	//$("input").on("blur", function()
	//{
		//$(".notic span").fadeIn(1000, function()
			//{
				//$(this).fadeOut(2000)
			//}).text("You Are Focusing In The Input");
	//});
//});

//ده مثال
//$(function()
//{
	//"user strict"; // for Js Lint Errors
	//$("input").on("blur", function()
	//{
		//f ($(this).val().length > 10) {
			//$(".notic span").fadeIn(1000, function()
			//{
				//$(this).fadeOut(2000);
			//}).text("Hello Bilal We Missed You");
	
		//} else {
			//$(".notic span").fadeIn(1000, function()
			//{
				//$(this).fadeOut(2000);
			//}).text("You Are Not Bilal Sorry Good Bye");
		//}
		//});
//});





//one=on                //دي بتعمل الفنكشن مره واحده مبتكررش الفنكشن
//ده مثال
//$(function()
//{
	//"use Strict";
	//$("p").one("click", function ()
	//{
		//$(this).animate({
			//fontSize: "+=3px"
		//});
	//});
//});


// Select                      //دي معناها تحديد
//ده مثال
//$(function()
//{
	//"use Strict";
	//$("textarea").on("click", function()
		//{
			//$(this).select();
		//});
	//$("textarea").select(function ()
	//{
		//$(this).after("Text Copied")
	//});

//}); 



//دي بتستخدم في الريسبونسيف
//Resize                        //دي معناها اعادة تحجيم


//$(function()
//{
  //"use strict"
  //$("section").height($(window).height() + 300);

 // $(window).on("resize",function() 
 // {
  	  //$("section").height($(window).height() + 300);
  	//var wid = $(window).width(),

  	  //hei = $(window).height();
  	  //console.log(wid, hei);
  	  //if(wid > 1000) {
  	  	//console.log("torres")
  	 // }
  //});

//});



//Event Reference => Scroll()
//ده مثال
//$(function()
//{
  //"use strict";
  //$(window).on("scroll", function () 
  //{
  	//var sc = $(window).scrollTop();
  	//if (sc > 1000) {
  		//$(".riberyy").fadeIn();
  	//} else {
  		//$(".riberyy").fadeOut();
  	//}
  //});
//});




//Event Reference => pageX, PageY               //دي معناها احدثيات
//ده مثال
//$(function()
//{
  //"use strict";
  //$("html").click( function (e) 
  //{
  //	$(".circle").show().offset({
  		//left: e.pageX,
  		//top: e.pageY
  //	});
 // });
//});




//Event Reference => Submit 
//ده مثال
//$(function()
//{
  //"use strict";
 // $("form").submit(function(e)
 // {
  	//if ($("input:first").val() === "CONFIRM") {
  		//$("span").text("Word Is Ok").show();
  		//return;
  //	}
  	//$("span").text("Word Not Correct").show().fadeOut(2000);
  	//e.preventDefault();
  //});
//});




//Event Reference => Delay 
//ده مثال
//$(function()
//{
  //"use strict";
//$("button").click(function()
	//{
		//$("span").text("Hello Torres").fadeIn(1000).delay(5000).fadeOut(1000)
	//});
//});




//Event Reference => Clone دي معناها الاستنساخ

//ده مثال
//$(function()
//{
  //"use strict";
  //$('button').on('click', function()
  //{
  	//$('mainm').clone(true or false ).appendTo('body');

 // });
//  $('mainm').on("click", function()
 // {
  	//$(this).css('color', '#F00');
 // });
//});


//Event Reference => Detach  =remove

//ده مثال
//$(function()
//{
 // "use strict";
 // var ele = $('div')

  //$("#remove").on("click", function()
 // {
  //	ele.detach();
 // });
   //$("#add").on("click", function()
 // {
  	//$("body").prepend(ele)
  //});

   //ele.on('click', function ()
   //{
   	//$(this).css('color', '#00F');
   //});

//});





//Event Reference => HasClass
//ده مثال
//$(function()
//{
	//'use strict';
	//$('li').each(function()
	//{
		//if($(this).hasClass('active'))
		//{
			//$(this).parent().parent().css('color', '#F00')
		//}
	//});

//});



//Event Reference => Offset
//ده مثال
//$(function()
//{
	//'use strict';
	//$(window).scroll(function () 
	//{
		//console.log('Scroll Top = ' + $(this).scrollTop());
		//console.log('Scroll Top = ' + $('div').offset().top);

		//var scrolling = $(this).scrollTop(),
			//divOffset = $('div').offset().top;

		//if(scroling >= divOffset) {

			//$('div').css('background-color', '#00F');
		//}
	//});
//});




//Event Reference => Position
//ده مثال
//$(function()
//{
	//'use strict';
	//console.log($('p').position());
//});





//دي لما يكون عندي حقل ادخال ومعموله خصيه انه مش شغال وعايز لما حد يملا الحقل ال فوق يفتح ال تحتيه علشان يملاه 
//دي بتغير االاتربيوت ب اتربيوت تنيه انا عايز اعملها
// Reference => Prop
//ده مثال
//$(function()
//{
	//'use strict';
	//$('button')click(function (e)
	//{
		//e.preventDefault();
		//$('input').prop('disabled', false);
	//});
//});

//ده مثال تاني غير ال فوق
//هنا ممكن احط اكتر من اتربيوت للعنصر
//$(function()
//{
	//'use strict';
	//$('button')click(function (e)
	//{
		//e.preventDefault();
		//$('input').prop({

		//'disabled': false,
		//'name' : 'MyField'
		//'id' : '#test'
	//});

	//});
//});







// دي لما اكون عايز استبدل عنصر بعنصر اخر
// Reference => Replace Withدي معناها استبدال 

//ده مثال

//$(function()
//{
	//'use strict';
	//$('div').replaceWith('Hello jQuery');
//});


//دي معناها ان يحول النص ال جوه الديف الى حقل ادخال اول لما ادوس عليه
//$(function()
//{
	//'use strict';
	//$('div').click(function()
	//{
		//$(this).replaceWith("<input type='text'>");
	//});
//});

// دي لما يكون عند ينص وعايز احوله الى حقل ادخال وعايز النص ده يكون مكتوب جو الحقل بعد ما يتحول 
//$(function()
//{
	//'use strict';
	//$('div').click(function()
	//{
		//$(this).replaceWith("<input type='text' val='" + $(this).text() + "'>");
		//$('button').fadeIn();
	//});
//});


//دي معناها ان انا لما يكون عندي عنصر فيه كلام وعايز احول العنصر ده الي حقل ادخال ويكون مكتوب فيه نفس النص ال جوه العنصر ال اتحول ولما ادوس علي الزرار يخلي الحقل الادخال ده عنصر مكتوب فيه النص ال انا غيرته في حقل الادخال و يخفي الزرار
//$(function()
//{
	//'use strict';
	//$('div').click(function()
	//{
		//$(this).replaceWith("<input type='text' val='" + $(this).text() + "'>");
		//$('button').fadeIn();
	//});

	//$('button').click(function()
	//{
		//$('input').replaceWith("<div>" + $('input').val() + "</div>");
		//$('button').fadeOut();
	//});
//});





// Reference => Scroll[Top, Left]
//ده لما يكون عندي عناصر ظهره وعناصر مخفيه وعايز لما اوصل الي عد من البكسل يظهر العناصر المخفيه
//ده مثال
//$(function () 
//{
	//'use strict';
	//$(window).scroll(function ()
	//{
		
		//console.log('Window Scroll Top = ' + $(this).scrollTop());
		//console.log('Test Lesson Offset = ' + $('.test-lesson').scrollTop().top);
		//if ($(window).scrollTop() >= $('.test-lesson').offset().top) {
			//$('.test-lesson').animate({
				//opacity: 1

			//}, 1000);

		//}
	//});
//دي معناها ان لما ادوس علي الزرار يطلع فوق الى اول الصفحه
// $('button').click(function () 
	//{
		//$(window).scrollTop(0 or ممكن اكتب هنا اكتر من رقم);
	//});
//});





// Reference => Wrap, Unwrap
//دي لما يكون في عناصر  وعايز اخلي ليهم اب واخلي الاب ده يخاد خواص انا مدهالو لما اتكا علي الزرار يضيف الخواص بتاعة الاب ولما اتكا علي الزرار التاني يشيل الخواص دي
//$(function()
//{
	//'use stric';
	//$('#add').click(function()
	//{
		//$('span').wrap('<div>Hello</div>');
	//});
	//$('#remove').click(function()
	//{
		//$('span').unwrap();
	//});
//});



// Reference => Each
//دي معناها ان اي عنصر من العناصر دي واخد كلا س معين اعمله الخواص دي من غير ما ادوس علي العنصر
//$(function()
//{
	//'use stric';
	//$('').each(function()
	//{
		//if($(this).hasClass('test')) {
			//$(this).css('color', '#00F');
		//}
	//});
//});




// Reference => Has
//دي معناها ان اي عنصر من العناصر دي طبق عليها الخواص دي
//ده مثال
//$(function()
//{
	//'use stric';
	//$('p, h2, div').has('strong, span, .test').css('color', '#00F');
//});




// Reference => Is هل
//دي معناها ان العنصر ال انا بتكا عليه هل العنصر ده ديف و لو ديف طبقلي عليه الخواص دي
    //$(function()
//{
	//'use stric';
	//$('span').click(function() 
	//{
		//if ($(this).parent().is('div'))
	//});
//});



//دي معناها ان العنصر ده ال انا هتاكا  عليه لو الاب بتاعه ديف او برجراف اعمل فيه الخواص دي
//$(function()
//{
	//'use stric';
	//$('span').click(function() 
	//{
		//if ($(this).parent().is('div,p'))
	//});
//});

//ده مثال
//$(function()
//{
	//'use stric';
	//$('span').click(function() 
	//{
		//if ($(this).parent().is(':first-child'))
	//});
//});

//دي معناها ان انا لما ادوس علي العنصر  لو العنصر ده له اب هل الاب ده يحتوي علي كلمه مكتوبه فيه مميزه اعمله الخواص دي

//$(function()
//{
	//'use stric';
	//$('span').click(function() 
	//{
		//if ($(this).parent().is(":contains('JavaScript')"))
	//});
//});


// Reference => End 
//دي معناها العنصر ده دورلي جواه علي عنصر اسمه اسبان واعمله الخواص دي
///$(function()
//{
	//'use stric';
	//$('div').find('span').css('color', '#00F')

//});
//ده مثال
//$(function()
//{
	//'use stric';
	//$('div').find('span').css('color', '#00F');.end().find('strong').css('clor', ' #F00').end().css("font-weight", "bold");

//});


//دي معناها ان العنصر ده دوارلي علي اسبان جواه اعملها العناصر دي وبعدين هيدور علي الديف ال هو اب للعنصر التاني ويطبق عليه الون التاني
//$(function()
//{
	//'use stric';
	//$('div').find('span').css('color', '#00F').end().find('strong').css('clor', ' #F00')

//});



/* End jaQuery */