const temp_adjustment = 
	{
		"50" : "1.711",
		"51" : "1.673",
		"52" : "1.642",
		"53" : "1.605",
		"54" : "1.576",
		"55" : "1.541",
		"56" : "1.513",
		"57" : "1.48",
		"58" : "1.453",
		"59" : "1.422",
		"60" : "1.391",
		"61" : "1.366",
		"62" : "1.337",
		"63" : "1.313",
		"64" : "1.285",
		"65" : "1.262",
		"66" : "1.236",
		"67" : "1.214",
		"68" : "1.189",
		"69" : "1.164",
		"70" : "1.144",
		"71" : "1.12",
		"72" : "1.101",
		"73" : "1.078",
		"74" : "1.06",
		"75" : "1.038",
		"76" : "1.021",
		"77" : "1",
		"78" : "0.982",
		"79" : "0.968",
		"80" : "0.951",
		"81" : "0.937",
		"82" : "0.921",
		"83" : "0.908",
		"84" : "0.892",
		"85" : "0.879",
		"86" : "0.862",
		"87" : "0.846",
		"88" : "0.832",
		"89" : "0.816",
		"90" : "0.802",
		"91" : "0.786",
		"92" : "0.772",
		"93" : "0.756",
		"94" : "0.742"
}

function test() {
	const hou_psi = document.getElementById('house-psi').value;	

	const hou_temp = document.getElementById('house-temp').value;

	const memb_psi_rating = document.querySelector('input[name="memb-psi-rating"]:checked').value;

	const memb_gpd_rating = document.querySelector('input[name="memb-gpd-rating"]:checked').value;

	const psi_adjust = memb_gpd_rating * ((hou_psi/memb_psi_rating)-1);

	const temp_adjust = (memb_gpd_rating / temp_adjustment[hou_temp]) - memb_gpd_rating;	
	
	const final = +memb_gpd_rating + +(Math.round(psi_adjust, 10)) + +(Math.round(temp_adjust, 10));

	document.getElementById('final').value = final;

	const fill_cup = (Math.round(86400 / (final * 16)));
	console.log(fill_cup);
	const fill_4_cup = (Math.round(fill_cup * 4));
	console.log(fill_4_cup);
	const fill_gallon = (Math.round(fill_4_cup * 4));
	console.log(fill_gallon);
	const fill_35_gallon = (Math.round(fill_gallon * (35 / 60)));
	console.log(fill_35_gallon);
	const fill_100_gallon = (Math.round((fill_gallon * 100) / 60));
	console.log(fill_100_gallon);
};

document.getElementById('button').addEventListener("click", test);
