(function ($) {

	(function phi() {

		var av, bv, cv,
			a = $('#phi-a'),
			b = $('#phi-b'),
			c = $('#phi-c'),
			vin = {
				a: a.find('input'),
				b: b.find('input'),
				c: c.find('input'),
			},
			e = 'change keyup',
			ratio = {
				phi: (1 + Math.sqrt(5)) / 2,
				euler: Math.exp(1),
			};

		function getVal($obj){
			return parseFloat($obj.val() ? $obj.val() : 0);
		}
		
		function rnd(num) {
			return num.toFixed(1);
		}

		function update() {
			vin.a.val(av);
			vin.b.val(bv);
			vin.c.val(cv);

			a.find('.result').html(rnd(av));
			b.find('.result').html(rnd(bv));
			c.find('.result').html(rnd(cv));

			console.log('Update Phi Calc \n av:' + av + '\n bv:' + bv + '\n cv' + cv);
		}

		(function init() {
			av = ratio.phi - 1;
			bv = 1;
			cv = ratio.phi;
			$('#ratio-phi').html(ratio.phi);

			console.log('Init Phi Calc');
			update();

			vin.a.on(e, function () {
				av = getVal($(this));
				bv = av * ratio.phi;
				cv = av + bv;
			});
			vin.b.on(e, function () {
				bv = getVal($(this));
				av = bv * (ratio.phi - 1);
				cv = av + bv;
			});
			vin.c.on(e, function () {
				cv = getVal($(this));
				bv = cv / ratio.phi;
				av = cv - bv;
			});

			$('input').on(e, update)
				.on('click touchend', function () {
					this.value = '';
					this.value = this.value;
				});

		})();

	})()

})(jQuery);