const adjust = {
    50: 1.711,
    51: 1.673,
    52: 1.642,
    53: 1.605,
    54: 1.576,
    55: 1.541,
    56: 1.513,
    57: 1.48,
    58: 1.453,
    59: 1.422,
    60: 1.391,
    61: 1.366,
    62: 1.337,
    63: 1.313,
    64: 1.285,
    65: 1.262,
    66: 1.236,
    67: 1.214,
    68: 1.189,
    69: 1.164,
    70: 1.144,
    71: 1.12,
    72: 1.101,
    73: 1.078,
    74: 1.06,
    75: 1.038,
    76: 1.021,
    77: 1,
    78: 0.982,
    79: 0.968,
    80: 0.951,
    81: 0.937,
    82: 0.921,
    83: 0.908,
    84: 0.892,
    85: 0.879,
    86: 0.861964285714286,
    87: 0.845660204081633,
    88: 0.832073469387755,
    89: 0.815769387755102,
    90: 0.802182653061225,
    91: 0.785878571428572,
    92: 0.772291836734694,
    93: 0.755987755102041,
    94: 0.742401020408164,
};

const membraneCalc = function membCalc() {
    const membGPD = document.getElementById("membGPD").value;
    const membPSI = document.getElementById("membPSI").value;
    const housePSI = document.getElementById("housePSI").value;
    const houseTemp = document.getElementById("houseTemp").value;
    const pressAdj = (parseInt(membGPD)*((housePSI/membPSI)-1));
    const tempAdj = ((parseInt(membGPD)/(adjust[houseTemp]))-parseInt(membGPD));
    const finalGPD = parseInt(membGPD) + Math.round(pressAdj) + Math.round(tempAdj);
    document.getElementById("final").innerHTML = "Your GPD is: " + finalGPD;
    document.getElementById("answer").style.display = "block";
};

const resetForm = function (reset) {
    document.getElementById("answer").style.display = "none";
    document.getElementById("formID").reset();
};