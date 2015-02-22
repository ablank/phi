(function($) {
    
    (function phi() {
        
var ratios = {
    phi: (1 + Math.sqrt(5)) / 2,
    euler: Math.exp(1),
}

console.log(ratios.euler);
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

	var phi = (1 + Math.sqrt(5)) / 2;
        var av,bv,cv;
        var e = 'keyup change';
        
        function rnd(num){
           return num.toFixed(0);
	}
        
        function update(){
            $('input#a').val(av);
            $('#a-rnd').html(rnd(av));
            $('input#b').val(bv);
            $('#b-rnd').html(rnd(bv));
            $('input#c').val(cv);
            $('#c-rnd').html(rnd(cv));
           // console.log('av:' + av + ' bv:' + bv + ' cv' + cv);
            
            $('input').each(function(){
                if(isNaN($(this).val())){
                    $(this).val(0);
                }
            });
        }
        
        $('h1').html(phi);
            av = phi - 1;
            bv = 1;
            cv = phi;
            //console.log('tested');
            
            update();
        /*
        (function init(){
            $('h1').html(phi);
            av = phi - 1;
            bv = 1;
            cv = phi;
            //console.log('tested');
            
            update();
        })()
        */
        
        $('input').live('click', function(){
            $(this).select();
        });
        
        $('input#a').live(e, function(){
            av = parseFloat($(this).val());
            bv = av * phi;
            cv = av + bv;
            
            update();
        });
        $('input#b').live(e, function(){
            bv = parseFloat($(this).val());
            av = bv * (phi - 1);
            cv = av + bv;
            
            update();
        });
        $('input#c').live(e, function(){
            cv = parseFloat($(this).val());
            bv = cv / phi;
            av = cv - bv;
                    
            update();
        });
            
    })()

})(jQuery);