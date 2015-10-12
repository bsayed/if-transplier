
var $Γ = { 'global': { 'scope': null, 'Σ': 0 } };

$Γ['global'].$this = $Γ['global'];

$Λ = [{ 'l': 0, id: 'global' }];
$Δ = [];
function $pc() {
    return $Λ[$Λ.length - 1];
}
function $lub() {

    var args = Array.prototype.slice.call(arguments, 0);
    return args.sort(function (a, b) {
        return (b - a);
    })[0];
}

function $scope($$cs, $var, isLHS) {
    //console.log($$cs)
    var $$csCopy = $$cs;

    do {
        //if ($$cs.hasOwnProperty(""+$var))
        if ($$cs[$var] !== undefined)
            return $$cs;
    } while ($$cs = $$cs.scope);


    if (isLHS) {
        $Γ['global'][$var] = 0;
        return $Γ['global'];
    } else {

        // if we can't find $var in any scope and its name is 'global'
        // it must be the the global object. Return $Γ which contains
        // global object as a property.
        if ($var == 'global')
            return $Γ;

        throw new Error("Can't find variable " + $var + " in scope chain: " + JSON.stringify($$csCopy));
    }
}

function $prop(obj, prop, $$cs) {
    var $ro, $t;
    $ro = $t = $scope($$cs, obj, false)[obj];
    do {
        if ($ro[prop] !== undefined)
            return $ro[prop];
    } while ($ro = $ro['__$proto__']);

    // if we looked up a property that doesn't exist return
    // the objects sec level.
    return $t.Σ;
}

function $comp(lbl, lvl) {
    var i = $Λ.length;
    while (i > 1 && $Λ[i].id !== lbl) {
        i--;
        $Λ[i].l = ($Λ[i].l > lvl) ? $Λ[i].l : lvl;
    }
    i--;
    $Λ[i].l = ($Λ[i].l > lvl) ? $Λ[i].l : lvl;
}

function $upgrade(varArray, lvl, $$cs) {

}

function sec_lvl(obj, prop, getValue, $$cs) {

    var result;
    // special case of looking up 'this'
    if (obj === 'this') {
        obj = prop;
        prop = null;
    }
    if (prop !== null) {
        result = $prop(obj, "" + prop, $$cs);
    } else {
        result = $scope($$cs, obj, false)[obj];
    }
    if (getValue) {
        return (result instanceof Object) ? result.Σ : result;
    } else {
        return result;
    }
}
//-------------------------------------------------------------------------------

$Γ['global']['findBestPack'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
var data, $tmp0, $tmp1, $tmp2, $tmp3, $tmp4, $tmp5, $tmp6, $tmp7, $tmp8, $tmp9, $tmp10, $tmp11, $tmp12, $tmp13, $tmp14, $tmp15, $tmp16, $tmp17, $tmp18, $tmp19, $tmp20, $tmp21, $tmp22;
$Γ['global']['$tmp22'] = $Γ['global']['$tmp21'] = $Γ['global']['$tmp20'] = $Γ['global']['$tmp19'] = $Γ['global']['$tmp18'] = $Γ['global']['$tmp17'] = $Γ['global']['$tmp16'] = $Γ['global']['$tmp15'] = $Γ['global']['$tmp14'] = $Γ['global']['$tmp13'] = $Γ['global']['$tmp12'] = $Γ['global']['$tmp11'] = $Γ['global']['$tmp10'] = $Γ['global']['$tmp9'] = $Γ['global']['$tmp8'] = $Γ['global']['$tmp7'] = $Γ['global']['$tmp6'] = $Γ['global']['$tmp5'] = $Γ['global']['$tmp4'] = $Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['data'] = 0;
$tmp0 = {
    name: 'map',
    weight: 9,
    value: 150,
    pieces: 1
};
$Γ['global']['$tmp0'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp1 = {
    name: 'compass',
    weight: 13,
    value: 35,
    pieces: 1
};
$Γ['global']['$tmp1'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp2 = {
    name: 'water',
    weight: 153,
    value: 200,
    pieces: 2
};
$Γ['global']['$tmp2'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp3 = {
    name: 'sandwich',
    weight: 50,
    value: 60,
    pieces: 2
};
$Γ['global']['$tmp3'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp4 = {
    name: 'glucose',
    weight: 15,
    value: 60,
    pieces: 2
};
$Γ['global']['$tmp4'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp5 = {
    name: 'tin',
    weight: 68,
    value: 45,
    pieces: 3
};
$Γ['global']['$tmp5'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp6 = {
    name: 'banana',
    weight: 27,
    value: 60,
    pieces: 3
};
$Γ['global']['$tmp6'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp7 = {
    name: 'apple',
    weight: 39,
    value: 40,
    pieces: 3
};
$Γ['global']['$tmp7'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp8 = {
    name: 'cheese',
    weight: 23,
    value: 30,
    pieces: 1
};
$Γ['global']['$tmp8'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp9 = {
    name: 'beer',
    weight: 52,
    value: 10,
    pieces: 3
};
$Γ['global']['$tmp9'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp10 = {
    name: 'suntan, cream',
    weight: 11,
    value: 70,
    pieces: 1
};
$Γ['global']['$tmp10'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp11 = {
    name: 'camera',
    weight: 32,
    value: 30,
    pieces: 1
};
$Γ['global']['$tmp11'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp12 = {
    name: 'T-shirt',
    weight: 24,
    value: 15,
    pieces: 2
};
$Γ['global']['$tmp12'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp13 = {
    name: 'trousers',
    weight: 48,
    value: 10,
    pieces: 2
};
$Γ['global']['$tmp13'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp14 = {
    name: 'umbrella',
    weight: 73,
    value: 40,
    pieces: 1
};
$Γ['global']['$tmp14'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp15 = {
    name: 'waterproof, trousers',
    weight: 42,
    value: 70,
    pieces: 1
};
$Γ['global']['$tmp15'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp16 = {
    name: 'waterproof, overclothes',
    weight: 43,
    value: 75,
    pieces: 1
};
$Γ['global']['$tmp16'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp17 = {
    name: 'note-case',
    weight: 22,
    value: 80,
    pieces: 1
};
$Γ['global']['$tmp17'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp18 = {
    name: 'sunglasses',
    weight: 7,
    value: 20,
    pieces: 1
};
$Γ['global']['$tmp18'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp19 = {
    name: 'towel',
    weight: 18,
    value: 12,
    pieces: 2
};
$Γ['global']['$tmp19'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp20 = {
    name: 'socks',
    weight: 4,
    value: 50,
    pieces: 1
};
$Γ['global']['$tmp20'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$tmp21 = {
    name: 'book',
    weight: 30,
    value: 10,
    pieces: 2
};
$Γ['global']['$tmp21'] = {
    __proto__: {},
    name: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    weight: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    value: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    pieces: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
data = [
    $tmp0,
    $tmp1,
    $tmp2,
    $tmp3,
    $tmp4,
    $tmp5,
    $tmp6,
    $tmp7,
    $tmp8,
    $tmp9,
    $tmp10,
    $tmp11,
    $tmp12,
    $tmp13,
    $tmp14,
    $tmp15,
    $tmp16,
    $tmp17,
    $tmp18,
    $tmp19,
    $tmp20,
    $tmp21
];
$Γ['global']['data'] = {
    __proto__: {},
    scope: $Γ['global'],
    0: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp0', null, false, $Γ['global'])),
    1: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp1', null, false, $Γ['global'])),
    2: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp2', null, false, $Γ['global'])),
    3: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp3', null, false, $Γ['global'])),
    4: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp4', null, false, $Γ['global'])),
    5: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp5', null, false, $Γ['global'])),
    6: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp6', null, false, $Γ['global'])),
    7: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp7', null, false, $Γ['global'])),
    8: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp8', null, false, $Γ['global'])),
    9: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp9', null, false, $Γ['global'])),
    10: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp10', null, false, $Γ['global'])),
    11: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp11', null, false, $Γ['global'])),
    12: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp12', null, false, $Γ['global'])),
    13: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp13', null, false, $Γ['global'])),
    14: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp14', null, false, $Γ['global'])),
    15: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp15', null, false, $Γ['global'])),
    16: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp16', null, false, $Γ['global'])),
    17: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp17', null, false, $Γ['global'])),
    18: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp18', null, false, $Γ['global'])),
    19: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp19', null, false, $Γ['global'])),
    20: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp20', null, false, $Γ['global'])),
    21: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp21', null, false, $Γ['global'])),
    Σ: $lub(sec_lvl('$tmp0', null, false, $Γ['global']), sec_lvl('$tmp1', null, false, $Γ['global']), sec_lvl('$tmp2', null, false, $Γ['global']), sec_lvl('$tmp3', null, false, $Γ['global']), sec_lvl('$tmp4', null, false, $Γ['global']), sec_lvl('$tmp5', null, false, $Γ['global']), sec_lvl('$tmp6', null, false, $Γ['global']), sec_lvl('$tmp7', null, false, $Γ['global']), sec_lvl('$tmp8', null, false, $Γ['global']), sec_lvl('$tmp9', null, false, $Γ['global']), sec_lvl('$tmp10', null, false, $Γ['global']), sec_lvl('$tmp11', null, false, $Γ['global']), sec_lvl('$tmp12', null, false, $Γ['global']), sec_lvl('$tmp13', null, false, $Γ['global']), sec_lvl('$tmp14', null, false, $Γ['global']), sec_lvl('$tmp15', null, false, $Γ['global']), sec_lvl('$tmp16', null, false, $Γ['global']), sec_lvl('$tmp17', null, false, $Γ['global']), sec_lvl('$tmp18', null, false, $Γ['global']), sec_lvl('$tmp19', null, false, $Γ['global']), sec_lvl('$tmp20', null, false, $Γ['global']), sec_lvl('$tmp21', null, false, $Γ['global']), $Λ[$Λ.length - 1].l)
};
function findBestPack() {
    var m, $tmp23, b, $tmp24, opts, P, choose, j, $tmp26, $tmp27, $tmp29, $tmp30, $tmp31, w, $tmp33, best, $tmp34, $tmp36, wgt, val, i, $tmp38, $tmp39, $tmp40, $tmp41, $tmp42, $tmp43;
    $Γ['global']['findBestPack']['$tmp43'] = $Γ['global']['findBestPack']['$tmp42'] = $Γ['global']['findBestPack']['$tmp41'] = $Γ['global']['findBestPack']['$tmp40'] = $Γ['global']['findBestPack']['$tmp39'] = $Γ['global']['findBestPack']['$tmp38'] = $Γ['global']['findBestPack']['i'] = $Γ['global']['findBestPack']['val'] = $Γ['global']['findBestPack']['wgt'] = $Γ['global']['findBestPack']['$tmp36'] = $Γ['global']['findBestPack']['$tmp34'] = $Γ['global']['findBestPack']['best'] = $Γ['global']['findBestPack']['$tmp33'] = $Γ['global']['findBestPack']['w'] = $Γ['global']['findBestPack']['$tmp31'] = $Γ['global']['findBestPack']['$tmp30'] = $Γ['global']['findBestPack']['$tmp29'] = $Γ['global']['findBestPack']['$tmp27'] = $Γ['global']['findBestPack']['$tmp26'] = $Γ['global']['findBestPack']['j'] = $Γ['global']['findBestPack']['choose'] = $Γ['global']['findBestPack']['P'] = $Γ['global']['findBestPack']['opts'] = $Γ['global']['findBestPack']['$tmp24'] = $Γ['global']['findBestPack']['b'] = $Γ['global']['findBestPack']['$tmp23'] = $Γ['global']['findBestPack']['m'] = 0;
    $tmp23 = [0];
    $Γ['global']['findBestPack']['$tmp23'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
    };
    m = [$tmp23];
    $Γ['global']['findBestPack']['m'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp23', null, false, $Γ['global']['findBestPack'])),
        Σ: $lub(sec_lvl('$tmp23', null, false, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l)
    };
    $tmp24 = [0];
    $Γ['global']['findBestPack']['$tmp24'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
    };
    b = [$tmp24];
    $Γ['global']['findBestPack']['b'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp24', null, false, $Γ['global']['findBestPack'])),
        Σ: $lub(sec_lvl('$tmp24', null, false, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l)
    };
    opts = [0];
    $Γ['global']['findBestPack']['opts'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
    };
    P = [1];
    $Γ['global']['findBestPack']['P'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
    };
    choose = 0;
    $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] = $Λ[$Λ.length - 1].l;
    j = 0;
    $scope($Γ['global']['findBestPack'], 'j', true)['j'] = $Λ[$Λ.length - 1].l;
    $tmp27 = data.length;
    $Γ['global']['findBestPack']['$tmp27'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
    $Γ['global']['findBestPack']['$tmp27'] instanceof Object ? $Γ['global']['findBestPack']['$tmp27'].Σ = $lub($Γ['global']['findBestPack']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp27'] = $lub($Γ['global']['findBestPack']['$tmp27'], $Λ[$Λ.length - 1].l);
    $tmp26 = j < $tmp27;
    $Γ['global']['findBestPack']['$tmp26'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp27', null, true, $Γ['global']['findBestPack']));
    $Γ['global']['findBestPack']['$tmp26'] instanceof Object ? $Γ['global']['findBestPack']['$tmp26'].Σ = $lub($Γ['global']['findBestPack']['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp26'] = $lub($Γ['global']['findBestPack']['$tmp26'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp26', null, true, $Γ['global']['findBestPack'])),
        id: 'LOOP'
    });
    for (; $tmp26;) {
        var $tmp44, $tmp45, $tmp46, $tmp47, $tmp48, $tmp49, $tmp50, $tmp51, $tmp25, $tmp26, $tmp52;
        $Γ['global']['findBestPack']['$tmp52'] = $Γ['global']['findBestPack']['$tmp26'] = $Γ['global']['findBestPack']['$tmp25'] = $Γ['global']['findBestPack']['$tmp51'] = $Γ['global']['findBestPack']['$tmp50'] = $Γ['global']['findBestPack']['$tmp49'] = $Γ['global']['findBestPack']['$tmp48'] = $Γ['global']['findBestPack']['$tmp47'] = $Γ['global']['findBestPack']['$tmp46'] = $Γ['global']['findBestPack']['$tmp45'] = $Γ['global']['findBestPack']['$tmp44'] = 0;
        $tmp44 = j + 1;
        $Γ['global']['findBestPack']['$tmp44'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp44'] instanceof Object ? $Γ['global']['findBestPack']['$tmp44'].Σ = $lub($Γ['global']['findBestPack']['$tmp44'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp44'] = $lub($Γ['global']['findBestPack']['$tmp44'], $Λ[$Λ.length - 1].l);
        $tmp45 = opts[j];
        $Γ['global']['findBestPack']['$tmp45'] = sec_lvl('opts', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp45'] instanceof Object ? $Γ['global']['findBestPack']['$tmp45'].Σ = $lub($Γ['global']['findBestPack']['$tmp45'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp45'] = $lub($Γ['global']['findBestPack']['$tmp45'], $Λ[$Λ.length - 1].l);
        $tmp47 = data[j];
        $Γ['global']['findBestPack']['$tmp47'] = sec_lvl('data', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp47'] instanceof Object ? $Γ['global']['findBestPack']['$tmp47'].Σ = $lub($Γ['global']['findBestPack']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp47'] = $lub($Γ['global']['findBestPack']['$tmp47'], $Λ[$Λ.length - 1].l);
        $tmp46 = $tmp47.pieces;
        $Γ['global']['findBestPack']['$tmp46'] = sec_lvl('$tmp47', 'pieces', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp46'] instanceof Object ? $Γ['global']['findBestPack']['$tmp46'].Σ = $lub($Γ['global']['findBestPack']['$tmp46'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp46'] = $lub($Γ['global']['findBestPack']['$tmp46'], $Λ[$Λ.length - 1].l);
        opts[$tmp44] = $tmp45 + $tmp46;
        $scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44] = $lub(sec_lvl('$tmp45', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp46', null, true, $Γ['global']['findBestPack']));
        _$tmp = sec_lvl('$tmp44', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('$tmp44', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('$tmp44', null, false, $Γ['global']['findBestPack']);
        $scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44] instanceof Object ? $scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44].Σ = $lub($scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44] = $lub($scope($Γ['global']['findBestPack'], 'opts', false)[$tmp44], _$tmp, $Λ[$Λ.length - 1].l);
        $tmp48 = j + 1;
        $Γ['global']['findBestPack']['$tmp48'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp48'] instanceof Object ? $Γ['global']['findBestPack']['$tmp48'].Σ = $lub($Γ['global']['findBestPack']['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp48'] = $lub($Γ['global']['findBestPack']['$tmp48'], $Λ[$Λ.length - 1].l);
        $tmp49 = P[j];
        $Γ['global']['findBestPack']['$tmp49'] = sec_lvl('P', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp49'] instanceof Object ? $Γ['global']['findBestPack']['$tmp49'].Σ = $lub($Γ['global']['findBestPack']['$tmp49'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp49'] = $lub($Γ['global']['findBestPack']['$tmp49'], $Λ[$Λ.length - 1].l);
        $tmp47 = data[j];
        $Γ['global']['findBestPack']['$tmp47'] = sec_lvl('data', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp47'] instanceof Object ? $Γ['global']['findBestPack']['$tmp47'].Σ = $lub($Γ['global']['findBestPack']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp47'] = $lub($Γ['global']['findBestPack']['$tmp47'], $Λ[$Λ.length - 1].l);
        $tmp51 = $tmp47.pieces;
        $Γ['global']['findBestPack']['$tmp51'] = sec_lvl('$tmp47', 'pieces', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp51'] instanceof Object ? $Γ['global']['findBestPack']['$tmp51'].Σ = $lub($Γ['global']['findBestPack']['$tmp51'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp51'] = $lub($Γ['global']['findBestPack']['$tmp51'], $Λ[$Λ.length - 1].l);
        $tmp50 = 1 + $tmp51;
        $Γ['global']['findBestPack']['$tmp50'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp51', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp50'] instanceof Object ? $Γ['global']['findBestPack']['$tmp50'].Σ = $lub($Γ['global']['findBestPack']['$tmp50'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp50'] = $lub($Γ['global']['findBestPack']['$tmp50'], $Λ[$Λ.length - 1].l);
        P[$tmp48] = $tmp49 * $tmp50;
        $scope($Γ['global']['findBestPack'], 'P', false)[$tmp48] = $lub(sec_lvl('$tmp49', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp50', null, true, $Γ['global']['findBestPack']));
        _$tmp = sec_lvl('$tmp48', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('$tmp48', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('$tmp48', null, false, $Γ['global']['findBestPack']);
        $scope($Γ['global']['findBestPack'], 'P', false)[$tmp48] instanceof Object ? $scope($Γ['global']['findBestPack'], 'P', false)[$tmp48].Σ = $lub($scope($Γ['global']['findBestPack'], 'P', false)[$tmp48].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'P', false)[$tmp48] = $lub($scope($Γ['global']['findBestPack'], 'P', false)[$tmp48], _$tmp, $Λ[$Λ.length - 1].l);
        $tmp25 = j++;
        $Γ['global']['findBestPack']['$tmp25'] = sec_lvl('j', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp25'] instanceof Object ? $Γ['global']['findBestPack']['$tmp25'].Σ = $lub($Γ['global']['findBestPack']['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp25'] = $lub($Γ['global']['findBestPack']['$tmp25'], $Λ[$Λ.length - 1].l);
        $tmp52 = data.length;
        $Γ['global']['findBestPack']['$tmp52'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp52'] instanceof Object ? $Γ['global']['findBestPack']['$tmp52'].Σ = $lub($Γ['global']['findBestPack']['$tmp52'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp52'] = $lub($Γ['global']['findBestPack']['$tmp52'], $Λ[$Λ.length - 1].l);
        $tmp26 = j < $tmp52;
        $Γ['global']['findBestPack']['$tmp26'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp52', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp26'] instanceof Object ? $Γ['global']['findBestPack']['$tmp26'].Σ = $lub($Γ['global']['findBestPack']['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp26'] = $lub($Γ['global']['findBestPack']['$tmp26'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    j = 0;
    $scope($Γ['global']['findBestPack'], 'j', true)['j'] = $Λ[$Λ.length - 1].l;
    $tmp31 = data.length;
    $Γ['global']['findBestPack']['$tmp31'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
    $Γ['global']['findBestPack']['$tmp31'] instanceof Object ? $Γ['global']['findBestPack']['$tmp31'].Σ = $lub($Γ['global']['findBestPack']['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp31'] = $lub($Γ['global']['findBestPack']['$tmp31'], $Λ[$Λ.length - 1].l);
    $tmp30 = opts[$tmp31];
    $Γ['global']['findBestPack']['$tmp30'] = sec_lvl('opts', $tmp31, false, $Γ['global']['findBestPack']);
    $Γ['global']['findBestPack']['$tmp30'] instanceof Object ? $Γ['global']['findBestPack']['$tmp30'].Σ = $lub($Γ['global']['findBestPack']['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp30'] = $lub($Γ['global']['findBestPack']['$tmp30'], $Λ[$Λ.length - 1].l);
    $tmp29 = j < $tmp30;
    $Γ['global']['findBestPack']['$tmp29'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp30', null, true, $Γ['global']['findBestPack']));
    $Γ['global']['findBestPack']['$tmp29'] instanceof Object ? $Γ['global']['findBestPack']['$tmp29'].Σ = $lub($Γ['global']['findBestPack']['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp29'] = $lub($Γ['global']['findBestPack']['$tmp29'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp29', null, true, $Γ['global']['findBestPack'])),
        id: 'LOOP'
    });
    for (; $tmp29;) {
        var $tmp53, $tmp54, $tmp55, $tmp56, $tmp28, $tmp29, $tmp57, $tmp58;
        $Γ['global']['findBestPack']['$tmp58'] = $Γ['global']['findBestPack']['$tmp57'] = $Γ['global']['findBestPack']['$tmp29'] = $Γ['global']['findBestPack']['$tmp28'] = $Γ['global']['findBestPack']['$tmp56'] = $Γ['global']['findBestPack']['$tmp55'] = $Γ['global']['findBestPack']['$tmp54'] = $Γ['global']['findBestPack']['$tmp53'] = 0;
        $tmp53 = m[0];
        $Γ['global']['findBestPack']['$tmp53'] = {
            Σ: 0,
            prototype: { Σ: $Λ[$Λ.length - 1].l }
        };
        $Γ['global']['findBestPack']['$tmp53'] instanceof Object ? $Γ['global']['findBestPack']['$tmp53'].Σ = $lub($Γ['global']['findBestPack']['$tmp53'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp53'] = $lub($Γ['global']['findBestPack']['$tmp53'], $Λ[$Λ.length - 1].l);
        $tmp54 = j + 1;
        $Γ['global']['findBestPack']['$tmp54'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp54'] instanceof Object ? $Γ['global']['findBestPack']['$tmp54'].Σ = $lub($Γ['global']['findBestPack']['$tmp54'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp54'] = $lub($Γ['global']['findBestPack']['$tmp54'], $Λ[$Λ.length - 1].l);
        $tmp55 = b[0];
        $Γ['global']['findBestPack']['$tmp55'] = {
            Σ: 0,
            prototype: { Σ: $Λ[$Λ.length - 1].l }
        };
        $Γ['global']['findBestPack']['$tmp55'] instanceof Object ? $Γ['global']['findBestPack']['$tmp55'].Σ = $lub($Γ['global']['findBestPack']['$tmp55'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp55'] = $lub($Γ['global']['findBestPack']['$tmp55'], $Λ[$Λ.length - 1].l);
        $tmp56 = j + 1;
        $Γ['global']['findBestPack']['$tmp56'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp56'] instanceof Object ? $Γ['global']['findBestPack']['$tmp56'].Σ = $lub($Γ['global']['findBestPack']['$tmp56'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp56'] = $lub($Γ['global']['findBestPack']['$tmp56'], $Λ[$Λ.length - 1].l);
        $tmp55[$tmp56] = 0;
        $Γ['global']['findBestPack']['$tmp55']['$tmp56'] = $Λ[$Λ.length - 1].l;
        _$tmp = sec_lvl('$tmp56', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('$tmp56', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('$tmp56', null, false, $Γ['global']['findBestPack']);
        $tmp53[$tmp54] = $tmp55[$tmp56];
        $Γ['global']['findBestPack']['$tmp53']['$tmp54'] = sec_lvl('$tmp55', $tmp56, false, $Γ['global']['findBestPack']);
        _$tmp = sec_lvl('$tmp54', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('$tmp54', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('$tmp54', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp53']['$tmp54'] instanceof Object ? $Γ['global']['findBestPack']['$tmp53']['$tmp54'].Σ = $lub($Γ['global']['findBestPack']['$tmp53']['$tmp54'].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp53']['$tmp54'] = $lub($Γ['global']['findBestPack']['$tmp53']['$tmp54'], _$tmp, $Λ[$Λ.length - 1].l);
        $tmp28 = j++;
        $Γ['global']['findBestPack']['$tmp28'] = sec_lvl('j', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp28'] instanceof Object ? $Γ['global']['findBestPack']['$tmp28'].Σ = $lub($Γ['global']['findBestPack']['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp28'] = $lub($Γ['global']['findBestPack']['$tmp28'], $Λ[$Λ.length - 1].l);
        $tmp58 = data.length;
        $Γ['global']['findBestPack']['$tmp58'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp58'] instanceof Object ? $Γ['global']['findBestPack']['$tmp58'].Σ = $lub($Γ['global']['findBestPack']['$tmp58'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp58'] = $lub($Γ['global']['findBestPack']['$tmp58'], $Λ[$Λ.length - 1].l);
        $tmp57 = opts[$tmp58];
        $Γ['global']['findBestPack']['$tmp57'] = sec_lvl('opts', $tmp58, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp57'] instanceof Object ? $Γ['global']['findBestPack']['$tmp57'].Σ = $lub($Γ['global']['findBestPack']['$tmp57'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp57'] = $lub($Γ['global']['findBestPack']['$tmp57'], $Λ[$Λ.length - 1].l);
        $tmp29 = j < $tmp57;
        $Γ['global']['findBestPack']['$tmp29'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp57', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp29'] instanceof Object ? $Γ['global']['findBestPack']['$tmp29'].Σ = $lub($Γ['global']['findBestPack']['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp29'] = $lub($Γ['global']['findBestPack']['$tmp29'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    w = 1;
    $scope($Γ['global']['findBestPack'], 'w', true)['w'] = $Λ[$Λ.length - 1].l;
    $tmp33 = w <= 400;
    $Γ['global']['findBestPack']['$tmp33'] = $lub(sec_lvl('w', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
    $Γ['global']['findBestPack']['$tmp33'] instanceof Object ? $Γ['global']['findBestPack']['$tmp33'].Σ = $lub($Γ['global']['findBestPack']['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp33'] = $lub($Γ['global']['findBestPack']['$tmp33'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp33', null, true, $Γ['global']['findBestPack'])),
        id: 'LOOP'
    });
    for (; $tmp33;) {
        m[w] = [0];
        $Γ['global']['findBestPack']['m']['w'] = {
            __proto__: {},
            scope: $Γ['global']['findBestPack'],
            0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
            Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
        };
        b[w] = [0];
        $Γ['global']['findBestPack']['b']['w'] = {
            __proto__: {},
            scope: $Γ['global']['findBestPack'],
            0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
            Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
        };
        var j, $tmp60, $tmp61, $tmp32, $tmp33;
        $Γ['global']['findBestPack']['$tmp33'] = $Γ['global']['findBestPack']['$tmp32'] = $Γ['global']['findBestPack']['$tmp61'] = $Γ['global']['findBestPack']['$tmp60'] = $Γ['global']['findBestPack']['j'] = 0;
        j = 0;
        $scope($Γ['global']['findBestPack'], 'j', true)['j'] = $Λ[$Λ.length - 1].l;
        $tmp61 = data.length;
        $Γ['global']['findBestPack']['$tmp61'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp61'] instanceof Object ? $Γ['global']['findBestPack']['$tmp61'].Σ = $lub($Γ['global']['findBestPack']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp61'] = $lub($Γ['global']['findBestPack']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp60 = j < $tmp61;
        $Γ['global']['findBestPack']['$tmp60'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp61', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp60'] instanceof Object ? $Γ['global']['findBestPack']['$tmp60'].Σ = $lub($Γ['global']['findBestPack']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp60'] = $lub($Γ['global']['findBestPack']['$tmp60'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp60', null, true, $Γ['global']['findBestPack'])),
            id: 'LOOP'
        });
        for (; $tmp60;) {
            var N, $tmp47, base, n, $tmp63, $tmp59, $tmp60, $tmp64;
            $Γ['global']['findBestPack']['$tmp64'] = $Γ['global']['findBestPack']['$tmp60'] = $Γ['global']['findBestPack']['$tmp59'] = $Γ['global']['findBestPack']['$tmp63'] = $Γ['global']['findBestPack']['n'] = $Γ['global']['findBestPack']['base'] = $Γ['global']['findBestPack']['$tmp47'] = $Γ['global']['findBestPack']['N'] = 0;
            $tmp47 = data[j];
            $Γ['global']['findBestPack']['$tmp47'] = sec_lvl('data', j, false, $Γ['global']['findBestPack']);
            $Γ['global']['findBestPack']['$tmp47'] instanceof Object ? $Γ['global']['findBestPack']['$tmp47'].Σ = $lub($Γ['global']['findBestPack']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp47'] = $lub($Γ['global']['findBestPack']['$tmp47'], $Λ[$Λ.length - 1].l);
            N = $tmp47.pieces;
            $scope($Γ['global']['findBestPack'], 'N', true)['N'] = sec_lvl('$tmp47', 'pieces', false, $Γ['global']['findBestPack']);
            $scope($Γ['global']['findBestPack'], 'N', true)['N'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'N', true)['N'].Σ = $lub($scope($Γ['global']['findBestPack'], 'N', true)['N'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'N', true)['N'] = $lub($scope($Γ['global']['findBestPack'], 'N', true)['N'], $Λ[$Λ.length - 1].l);
            base = opts[j];
            $scope($Γ['global']['findBestPack'], 'base', true)['base'] = sec_lvl('opts', j, false, $Γ['global']['findBestPack']);
            $scope($Γ['global']['findBestPack'], 'base', true)['base'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'base', true)['base'].Σ = $lub($scope($Γ['global']['findBestPack'], 'base', true)['base'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'base', true)['base'] = $lub($scope($Γ['global']['findBestPack'], 'base', true)['base'], $Λ[$Λ.length - 1].l);
            n = 1;
            $scope($Γ['global']['findBestPack'], 'n', true)['n'] = $Λ[$Λ.length - 1].l;
            $tmp63 = n <= N;
            $Γ['global']['findBestPack']['$tmp63'] = $lub(sec_lvl('n', null, true, $Γ['global']['findBestPack']), sec_lvl('N', null, true, $Γ['global']['findBestPack']));
            $Γ['global']['findBestPack']['$tmp63'] instanceof Object ? $Γ['global']['findBestPack']['$tmp63'].Σ = $lub($Γ['global']['findBestPack']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp63'] = $lub($Γ['global']['findBestPack']['$tmp63'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp63', null, true, $Γ['global']['findBestPack'])),
                id: 'LOOP'
            });
            for (; $tmp63;) {
                var W, $tmp65, $tmp47, s, $tmp93, v, $tmp66, $tmp67, I, wN, $tmp68, C, $tmp69, $tmp70, $tmp71, $tmp72, $tmp73, $tmp74, $tmp75, $tmp76, $tmp77, $tmp78, $tmp79, $tmp94, $tmp95, $tmp96, $tmp97, $tmp62, $tmp63;
                $Γ['global']['findBestPack']['$tmp63'] = $Γ['global']['findBestPack']['$tmp62'] = $Γ['global']['findBestPack']['$tmp97'] = $Γ['global']['findBestPack']['$tmp96'] = $Γ['global']['findBestPack']['$tmp95'] = $Γ['global']['findBestPack']['$tmp94'] = $Γ['global']['findBestPack']['$tmp79'] = $Γ['global']['findBestPack']['$tmp78'] = $Γ['global']['findBestPack']['$tmp77'] = $Γ['global']['findBestPack']['$tmp76'] = $Γ['global']['findBestPack']['$tmp75'] = $Γ['global']['findBestPack']['$tmp74'] = $Γ['global']['findBestPack']['$tmp73'] = $Γ['global']['findBestPack']['$tmp72'] = $Γ['global']['findBestPack']['$tmp71'] = $Γ['global']['findBestPack']['$tmp70'] = $Γ['global']['findBestPack']['$tmp69'] = $Γ['global']['findBestPack']['C'] = $Γ['global']['findBestPack']['$tmp68'] = $Γ['global']['findBestPack']['wN'] = $Γ['global']['findBestPack']['I'] = $Γ['global']['findBestPack']['$tmp67'] = $Γ['global']['findBestPack']['$tmp66'] = $Γ['global']['findBestPack']['v'] = $Γ['global']['findBestPack']['$tmp93'] = $Γ['global']['findBestPack']['s'] = $Γ['global']['findBestPack']['$tmp47'] = $Γ['global']['findBestPack']['$tmp65'] = $Γ['global']['findBestPack']['W'] = 0;
                $tmp47 = data[j];
                $Γ['global']['findBestPack']['$tmp47'] = sec_lvl('data', j, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp47'] instanceof Object ? $Γ['global']['findBestPack']['$tmp47'].Σ = $lub($Γ['global']['findBestPack']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp47'] = $lub($Γ['global']['findBestPack']['$tmp47'], $Λ[$Λ.length - 1].l);
                $tmp65 = $tmp47.weight;
                $Γ['global']['findBestPack']['$tmp65'] = sec_lvl('$tmp47', 'weight', false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp65'] instanceof Object ? $Γ['global']['findBestPack']['$tmp65'].Σ = $lub($Γ['global']['findBestPack']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp65'] = $lub($Γ['global']['findBestPack']['$tmp65'], $Λ[$Λ.length - 1].l);
                W = n * $tmp65;
                $scope($Γ['global']['findBestPack'], 'W', true)['W'] = $lub(sec_lvl('n', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp65', null, true, $Γ['global']['findBestPack']));
                $scope($Γ['global']['findBestPack'], 'W', true)['W'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'W', true)['W'].Σ = $lub($scope($Γ['global']['findBestPack'], 'W', true)['W'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'W', true)['W'] = $lub($scope($Γ['global']['findBestPack'], 'W', true)['W'], $Λ[$Λ.length - 1].l);
                $tmp93 = w >= W;
                $Γ['global']['findBestPack']['$tmp93'] = $lub(sec_lvl('w', null, true, $Γ['global']['findBestPack']), sec_lvl('W', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp93'] instanceof Object ? $Γ['global']['findBestPack']['$tmp93'].Σ = $lub($Γ['global']['findBestPack']['$tmp93'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp93'] = $lub($Γ['global']['findBestPack']['$tmp93'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp93', null, true, $Γ['global']['findBestPack'])),
                    id: 'IF'
                });
                if ($tmp93) {
                    s = 1;
                    $scope($Γ['global']['findBestPack'], 's', true)['s'] = $Λ[$Λ.length - 1].l;
                } else {
                    s = 0;
                    $scope($Γ['global']['findBestPack'], 's', true)['s'] = $Λ[$Λ.length - 1].l;
                }
                $Λ.pop();
                $tmp66 = s * n;
                $Γ['global']['findBestPack']['$tmp66'] = $lub(sec_lvl('s', null, true, $Γ['global']['findBestPack']), sec_lvl('n', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp66'] instanceof Object ? $Γ['global']['findBestPack']['$tmp66'].Σ = $lub($Γ['global']['findBestPack']['$tmp66'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp66'] = $lub($Γ['global']['findBestPack']['$tmp66'], $Λ[$Λ.length - 1].l);
                $tmp47 = data[j];
                $Γ['global']['findBestPack']['$tmp47'] = sec_lvl('data', j, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp47'] instanceof Object ? $Γ['global']['findBestPack']['$tmp47'].Σ = $lub($Γ['global']['findBestPack']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp47'] = $lub($Γ['global']['findBestPack']['$tmp47'], $Λ[$Λ.length - 1].l);
                $tmp67 = $tmp47.value;
                $Γ['global']['findBestPack']['$tmp67'] = sec_lvl('$tmp47', 'value', false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp67'] instanceof Object ? $Γ['global']['findBestPack']['$tmp67'].Σ = $lub($Γ['global']['findBestPack']['$tmp67'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp67'] = $lub($Γ['global']['findBestPack']['$tmp67'], $Λ[$Λ.length - 1].l);
                v = $tmp66 * $tmp67;
                $scope($Γ['global']['findBestPack'], 'v', true)['v'] = $lub(sec_lvl('$tmp66', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp67', null, true, $Γ['global']['findBestPack']));
                $scope($Γ['global']['findBestPack'], 'v', true)['v'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'v', true)['v'].Σ = $lub($scope($Γ['global']['findBestPack'], 'v', true)['v'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'v', true)['v'] = $lub($scope($Γ['global']['findBestPack'], 'v', true)['v'], $Λ[$Λ.length - 1].l);
                I = base + n;
                $scope($Γ['global']['findBestPack'], 'I', true)['I'] = $lub(sec_lvl('base', null, true, $Γ['global']['findBestPack']), sec_lvl('n', null, true, $Γ['global']['findBestPack']));
                $scope($Γ['global']['findBestPack'], 'I', true)['I'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'I', true)['I'].Σ = $lub($scope($Γ['global']['findBestPack'], 'I', true)['I'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'I', true)['I'] = $lub($scope($Γ['global']['findBestPack'], 'I', true)['I'], $Λ[$Λ.length - 1].l);
                $tmp68 = s * W;
                $Γ['global']['findBestPack']['$tmp68'] = $lub(sec_lvl('s', null, true, $Γ['global']['findBestPack']), sec_lvl('W', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp68'] instanceof Object ? $Γ['global']['findBestPack']['$tmp68'].Σ = $lub($Γ['global']['findBestPack']['$tmp68'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp68'] = $lub($Γ['global']['findBestPack']['$tmp68'], $Λ[$Λ.length - 1].l);
                wN = w - $tmp68;
                $scope($Γ['global']['findBestPack'], 'wN', true)['wN'] = $lub(sec_lvl('w', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp68', null, true, $Γ['global']['findBestPack']));
                $scope($Γ['global']['findBestPack'], 'wN', true)['wN'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'wN', true)['wN'].Σ = $lub($scope($Γ['global']['findBestPack'], 'wN', true)['wN'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'wN', true)['wN'] = $lub($scope($Γ['global']['findBestPack'], 'wN', true)['wN'], $Λ[$Λ.length - 1].l);
                $tmp70 = P[j];
                $Γ['global']['findBestPack']['$tmp70'] = sec_lvl('P', j, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp70'] instanceof Object ? $Γ['global']['findBestPack']['$tmp70'].Σ = $lub($Γ['global']['findBestPack']['$tmp70'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp70'] = $lub($Γ['global']['findBestPack']['$tmp70'], $Λ[$Λ.length - 1].l);
                $tmp69 = n * $tmp70;
                $Γ['global']['findBestPack']['$tmp69'] = $lub(sec_lvl('n', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp70', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp69'] instanceof Object ? $Γ['global']['findBestPack']['$tmp69'].Σ = $lub($Γ['global']['findBestPack']['$tmp69'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp69'] = $lub($Γ['global']['findBestPack']['$tmp69'], $Λ[$Λ.length - 1].l);
                $tmp72 = b[wN];
                $Γ['global']['findBestPack']['$tmp72'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp72'] instanceof Object ? $Γ['global']['findBestPack']['$tmp72'].Σ = $lub($Γ['global']['findBestPack']['$tmp72'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp72'] = $lub($Γ['global']['findBestPack']['$tmp72'], $Λ[$Λ.length - 1].l);
                $tmp71 = $tmp72[base];
                $Γ['global']['findBestPack']['$tmp71'] = sec_lvl('$tmp72', base, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp71'] instanceof Object ? $Γ['global']['findBestPack']['$tmp71'].Σ = $lub($Γ['global']['findBestPack']['$tmp71'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp71'] = $lub($Γ['global']['findBestPack']['$tmp71'], $Λ[$Λ.length - 1].l);
                C = $tmp69 + $tmp71;
                $scope($Γ['global']['findBestPack'], 'C', true)['C'] = $lub(sec_lvl('$tmp69', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp71', null, true, $Γ['global']['findBestPack']));
                $scope($Γ['global']['findBestPack'], 'C', true)['C'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'C', true)['C'].Σ = $lub($scope($Γ['global']['findBestPack'], 'C', true)['C'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'C', true)['C'] = $lub($scope($Γ['global']['findBestPack'], 'C', true)['C'], $Λ[$Λ.length - 1].l);
                $tmp73 = m[w];
                $Γ['global']['findBestPack']['$tmp73'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp73'] instanceof Object ? $Γ['global']['findBestPack']['$tmp73'].Σ = $lub($Γ['global']['findBestPack']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp73'] = $lub($Γ['global']['findBestPack']['$tmp73'], $Λ[$Λ.length - 1].l);
                $tmp73 = m[w];
                $Γ['global']['findBestPack']['$tmp73'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp73'] instanceof Object ? $Γ['global']['findBestPack']['$tmp73'].Σ = $lub($Γ['global']['findBestPack']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp73'] = $lub($Γ['global']['findBestPack']['$tmp73'], $Λ[$Λ.length - 1].l);
                $tmp75 = I - 1;
                $Γ['global']['findBestPack']['$tmp75'] = $lub(sec_lvl('I', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
                $Γ['global']['findBestPack']['$tmp75'] instanceof Object ? $Γ['global']['findBestPack']['$tmp75'].Σ = $lub($Γ['global']['findBestPack']['$tmp75'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp75'] = $lub($Γ['global']['findBestPack']['$tmp75'], $Λ[$Λ.length - 1].l);
                $tmp74 = $tmp73[$tmp75];
                $Γ['global']['findBestPack']['$tmp74'] = sec_lvl('$tmp73', $tmp75, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp74'] instanceof Object ? $Γ['global']['findBestPack']['$tmp74'].Σ = $lub($Γ['global']['findBestPack']['$tmp74'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp74'] = $lub($Γ['global']['findBestPack']['$tmp74'], $Λ[$Λ.length - 1].l);
                $tmp78 = m[wN];
                $Γ['global']['findBestPack']['$tmp78'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp78'] instanceof Object ? $Γ['global']['findBestPack']['$tmp78'].Σ = $lub($Γ['global']['findBestPack']['$tmp78'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp78'] = $lub($Γ['global']['findBestPack']['$tmp78'], $Λ[$Λ.length - 1].l);
                $tmp77 = $tmp78[base];
                $Γ['global']['findBestPack']['$tmp77'] = sec_lvl('$tmp78', base, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp77'] instanceof Object ? $Γ['global']['findBestPack']['$tmp77'].Σ = $lub($Γ['global']['findBestPack']['$tmp77'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp77'] = $lub($Γ['global']['findBestPack']['$tmp77'], $Λ[$Λ.length - 1].l);
                $tmp76 = v + $tmp77;
                $Γ['global']['findBestPack']['$tmp76'] = $lub(sec_lvl('v', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp77', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp76'] instanceof Object ? $Γ['global']['findBestPack']['$tmp76'].Σ = $lub($Γ['global']['findBestPack']['$tmp76'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp76'] = $lub($Γ['global']['findBestPack']['$tmp76'], $Λ[$Λ.length - 1].l);
                $tmp73[I] = Math.max($tmp74, $tmp76);
                $tmp79 = b[w];
                $Γ['global']['findBestPack']['$tmp79'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp79'] instanceof Object ? $Γ['global']['findBestPack']['$tmp79'].Σ = $lub($Γ['global']['findBestPack']['$tmp79'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp79'] = $lub($Γ['global']['findBestPack']['$tmp79'], $Λ[$Λ.length - 1].l);
                $tmp73 = m[w];
                $Γ['global']['findBestPack']['$tmp73'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp73'] instanceof Object ? $Γ['global']['findBestPack']['$tmp73'].Σ = $lub($Γ['global']['findBestPack']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp73'] = $lub($Γ['global']['findBestPack']['$tmp73'], $Λ[$Λ.length - 1].l);
                $tmp95 = $tmp73[I];
                $Γ['global']['findBestPack']['$tmp95'] = sec_lvl('$tmp73', I, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp95'] instanceof Object ? $Γ['global']['findBestPack']['$tmp95'].Σ = $lub($Γ['global']['findBestPack']['$tmp95'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp95'] = $lub($Γ['global']['findBestPack']['$tmp95'], $Λ[$Λ.length - 1].l);
                $tmp73 = m[w];
                $Γ['global']['findBestPack']['$tmp73'] = {
                    Σ: 0,
                    prototype: { Σ: $Λ[$Λ.length - 1].l }
                };
                $Γ['global']['findBestPack']['$tmp73'] instanceof Object ? $Γ['global']['findBestPack']['$tmp73'].Σ = $lub($Γ['global']['findBestPack']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp73'] = $lub($Γ['global']['findBestPack']['$tmp73'], $Λ[$Λ.length - 1].l);
                $tmp97 = I - 1;
                $Γ['global']['findBestPack']['$tmp97'] = $lub(sec_lvl('I', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
                $Γ['global']['findBestPack']['$tmp97'] instanceof Object ? $Γ['global']['findBestPack']['$tmp97'].Σ = $lub($Γ['global']['findBestPack']['$tmp97'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp97'] = $lub($Γ['global']['findBestPack']['$tmp97'], $Λ[$Λ.length - 1].l);
                $tmp96 = $tmp73[$tmp97];
                $Γ['global']['findBestPack']['$tmp96'] = sec_lvl('$tmp73', $tmp97, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp96'] instanceof Object ? $Γ['global']['findBestPack']['$tmp96'].Σ = $lub($Γ['global']['findBestPack']['$tmp96'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp96'] = $lub($Γ['global']['findBestPack']['$tmp96'], $Λ[$Λ.length - 1].l);
                $tmp94 = $tmp95 > $tmp96;
                $Γ['global']['findBestPack']['$tmp94'] = $lub(sec_lvl('$tmp95', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp96', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp94'] instanceof Object ? $Γ['global']['findBestPack']['$tmp94'].Σ = $lub($Γ['global']['findBestPack']['$tmp94'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp94'] = $lub($Γ['global']['findBestPack']['$tmp94'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp94', null, true, $Γ['global']['findBestPack'])),
                    id: 'IF'
                });
                if ($tmp94) {
                    $tmp79[I] = C;
                    $Γ['global']['findBestPack']['$tmp79']['I'] = sec_lvl('C', null, false, $Γ['global']['findBestPack']);
                    _$tmp = sec_lvl('I', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('I', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('I', null, false, $Γ['global']['findBestPack']);
                    $Γ['global']['findBestPack']['$tmp79']['I'] instanceof Object ? $Γ['global']['findBestPack']['$tmp79']['I'].Σ = $lub($Γ['global']['findBestPack']['$tmp79']['I'].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp79']['I'] = $lub($Γ['global']['findBestPack']['$tmp79']['I'], _$tmp, $Λ[$Λ.length - 1].l);
                } else {
                    var $tmp79, $tmp98;
                    $Γ['global']['findBestPack']['$tmp98'] = $Γ['global']['findBestPack']['$tmp79'] = 0;
                    $tmp79 = b[w];
                    $Γ['global']['findBestPack']['$tmp79'] = {
                        Σ: 0,
                        prototype: { Σ: $Λ[$Λ.length - 1].l }
                    };
                    $Γ['global']['findBestPack']['$tmp79'] instanceof Object ? $Γ['global']['findBestPack']['$tmp79'].Σ = $lub($Γ['global']['findBestPack']['$tmp79'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp79'] = $lub($Γ['global']['findBestPack']['$tmp79'], $Λ[$Λ.length - 1].l);
                    $tmp98 = I - 1;
                    $Γ['global']['findBestPack']['$tmp98'] = $lub(sec_lvl('I', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
                    $Γ['global']['findBestPack']['$tmp98'] instanceof Object ? $Γ['global']['findBestPack']['$tmp98'].Σ = $lub($Γ['global']['findBestPack']['$tmp98'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp98'] = $lub($Γ['global']['findBestPack']['$tmp98'], $Λ[$Λ.length - 1].l);
                    $tmp79[I] = $tmp79[$tmp98];
                    $Γ['global']['findBestPack']['$tmp79']['I'] = sec_lvl('$tmp79', $tmp98, false, $Γ['global']['findBestPack']);
                    _$tmp = sec_lvl('I', null, false, $Γ['global']['findBestPack']) instanceof Object ? sec_lvl('I', null, false, $Γ['global']['findBestPack']).Σ : sec_lvl('I', null, false, $Γ['global']['findBestPack']);
                    $Γ['global']['findBestPack']['$tmp79']['I'] instanceof Object ? $Γ['global']['findBestPack']['$tmp79']['I'].Σ = $lub($Γ['global']['findBestPack']['$tmp79']['I'].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp79']['I'] = $lub($Γ['global']['findBestPack']['$tmp79']['I'], _$tmp, $Λ[$Λ.length - 1].l);
                }
                $Λ.pop();
                choose = $tmp79[I];
                $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] = sec_lvl('$tmp79', I, false, $Γ['global']['findBestPack']);
                $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'choose', true)['choose'].Σ = $lub($scope($Γ['global']['findBestPack'], 'choose', true)['choose'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] = $lub($scope($Γ['global']['findBestPack'], 'choose', true)['choose'], $Λ[$Λ.length - 1].l);
                $tmp62 = n++;
                $Γ['global']['findBestPack']['$tmp62'] = sec_lvl('n', null, false, $Γ['global']['findBestPack']);
                $Γ['global']['findBestPack']['$tmp62'] instanceof Object ? $Γ['global']['findBestPack']['$tmp62'].Σ = $lub($Γ['global']['findBestPack']['$tmp62'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp62'] = $lub($Γ['global']['findBestPack']['$tmp62'], $Λ[$Λ.length - 1].l);
                $tmp63 = n <= N;
                $Γ['global']['findBestPack']['$tmp63'] = $lub(sec_lvl('n', null, true, $Γ['global']['findBestPack']), sec_lvl('N', null, true, $Γ['global']['findBestPack']));
                $Γ['global']['findBestPack']['$tmp63'] instanceof Object ? $Γ['global']['findBestPack']['$tmp63'].Σ = $lub($Γ['global']['findBestPack']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp63'] = $lub($Γ['global']['findBestPack']['$tmp63'], $Λ[$Λ.length - 1].l);
            }
            $upgrade(['$tmp73'], $Λ[$Λ.length - 1].l, $Γ['global']['findBestPack']);
            $Λ.pop();
            $tmp59 = j++;
            $Γ['global']['findBestPack']['$tmp59'] = sec_lvl('j', null, false, $Γ['global']['findBestPack']);
            $Γ['global']['findBestPack']['$tmp59'] instanceof Object ? $Γ['global']['findBestPack']['$tmp59'].Σ = $lub($Γ['global']['findBestPack']['$tmp59'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp59'] = $lub($Γ['global']['findBestPack']['$tmp59'], $Λ[$Λ.length - 1].l);
            $tmp64 = data.length;
            $Γ['global']['findBestPack']['$tmp64'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
            $Γ['global']['findBestPack']['$tmp64'] instanceof Object ? $Γ['global']['findBestPack']['$tmp64'].Σ = $lub($Γ['global']['findBestPack']['$tmp64'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp64'] = $lub($Γ['global']['findBestPack']['$tmp64'], $Λ[$Λ.length - 1].l);
            $tmp60 = j < $tmp64;
            $Γ['global']['findBestPack']['$tmp60'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp64', null, true, $Γ['global']['findBestPack']));
            $Γ['global']['findBestPack']['$tmp60'] instanceof Object ? $Γ['global']['findBestPack']['$tmp60'].Σ = $lub($Γ['global']['findBestPack']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp60'] = $lub($Γ['global']['findBestPack']['$tmp60'], $Λ[$Λ.length - 1].l);
        }
        $upgrade(['$tmp73'], $Λ[$Λ.length - 1].l, $Γ['global']['findBestPack']);
        $Λ.pop();
        $tmp32 = w++;
        $Γ['global']['findBestPack']['$tmp32'] = sec_lvl('w', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp32'] instanceof Object ? $Γ['global']['findBestPack']['$tmp32'].Σ = $lub($Γ['global']['findBestPack']['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp32'] = $lub($Γ['global']['findBestPack']['$tmp32'], $Λ[$Λ.length - 1].l);
        $tmp33 = w <= 400;
        $Γ['global']['findBestPack']['$tmp33'] = $lub(sec_lvl('w', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp33'] instanceof Object ? $Γ['global']['findBestPack']['$tmp33'].Σ = $lub($Γ['global']['findBestPack']['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp33'] = $lub($Γ['global']['findBestPack']['$tmp33'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'm',
        'b',
        '$tmp73'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['findBestPack']);
    $Λ.pop();
    best = [];
    $Γ['global']['findBestPack']['best'] = {
        __proto__: {},
        scope: $Γ['global']['findBestPack'],
        Σ: $lub($Λ[$Λ.length - 1].l)
    };
    $tmp34 = data.length;
    $Γ['global']['findBestPack']['$tmp34'] = sec_lvl('data', 'length', false, $Γ['global']['findBestPack']);
    $Γ['global']['findBestPack']['$tmp34'] instanceof Object ? $Γ['global']['findBestPack']['$tmp34'].Σ = $lub($Γ['global']['findBestPack']['$tmp34'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp34'] = $lub($Γ['global']['findBestPack']['$tmp34'], $Λ[$Λ.length - 1].l);
    j = $tmp34 - 1;
    $scope($Γ['global']['findBestPack'], 'j', true)['j'] = $lub(sec_lvl('$tmp34', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
    $scope($Γ['global']['findBestPack'], 'j', true)['j'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'j', true)['j'].Σ = $lub($scope($Γ['global']['findBestPack'], 'j', true)['j'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'j', true)['j'] = $lub($scope($Γ['global']['findBestPack'], 'j', true)['j'], $Λ[$Λ.length - 1].l);
    $tmp36 = j >= 0;
    $Γ['global']['findBestPack']['$tmp36'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
    $Γ['global']['findBestPack']['$tmp36'] instanceof Object ? $Γ['global']['findBestPack']['$tmp36'].Σ = $lub($Γ['global']['findBestPack']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp36'] = $lub($Γ['global']['findBestPack']['$tmp36'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp36', null, true, $Γ['global']['findBestPack'])),
        id: 'LOOP'
    });
    for (; $tmp36;) {
        var $tmp80, $tmp81, $tmp82, $tmp83, $tmp35, $tmp36;
        $Γ['global']['findBestPack']['$tmp36'] = $Γ['global']['findBestPack']['$tmp35'] = $Γ['global']['findBestPack']['$tmp83'] = $Γ['global']['findBestPack']['$tmp82'] = $Γ['global']['findBestPack']['$tmp81'] = $Γ['global']['findBestPack']['$tmp80'] = 0;
        $tmp81 = P[j];
        $Γ['global']['findBestPack']['$tmp81'] = sec_lvl('P', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp81'] instanceof Object ? $Γ['global']['findBestPack']['$tmp81'].Σ = $lub($Γ['global']['findBestPack']['$tmp81'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp81'] = $lub($Γ['global']['findBestPack']['$tmp81'], $Λ[$Λ.length - 1].l);
        $tmp80 = choose / $tmp81;
        $Γ['global']['findBestPack']['$tmp80'] = $lub(sec_lvl('choose', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp81', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp80'] instanceof Object ? $Γ['global']['findBestPack']['$tmp80'].Σ = $lub($Γ['global']['findBestPack']['$tmp80'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp80'] = $lub($Γ['global']['findBestPack']['$tmp80'], $Λ[$Λ.length - 1].l);
        best[j] = Math.floor($tmp80);
        $tmp82 = best[j];
        $Γ['global']['findBestPack']['$tmp82'] = sec_lvl('best', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp82'] instanceof Object ? $Γ['global']['findBestPack']['$tmp82'].Σ = $lub($Γ['global']['findBestPack']['$tmp82'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp82'] = $lub($Γ['global']['findBestPack']['$tmp82'], $Λ[$Λ.length - 1].l);
        $tmp83 = P[j];
        $Γ['global']['findBestPack']['$tmp83'] = sec_lvl('P', j, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp83'] instanceof Object ? $Γ['global']['findBestPack']['$tmp83'].Σ = $lub($Γ['global']['findBestPack']['$tmp83'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp83'] = $lub($Γ['global']['findBestPack']['$tmp83'], $Λ[$Λ.length - 1].l);
        choose -= $tmp82 * $tmp83;
        $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] = $lub(sec_lvl('$tmp82', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp83', null, true, $Γ['global']['findBestPack']));
        $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'choose', true)['choose'].Σ = $lub($scope($Γ['global']['findBestPack'], 'choose', true)['choose'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'choose', true)['choose'] = $lub($scope($Γ['global']['findBestPack'], 'choose', true)['choose'], $Λ[$Λ.length - 1].l);
        $tmp35 = j--;
        $Γ['global']['findBestPack']['$tmp35'] = sec_lvl('j', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp35'] instanceof Object ? $Γ['global']['findBestPack']['$tmp35'].Σ = $lub($Γ['global']['findBestPack']['$tmp35'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp35'] = $lub($Γ['global']['findBestPack']['$tmp35'], $Λ[$Λ.length - 1].l);
        $tmp36 = j >= 0;
        $Γ['global']['findBestPack']['$tmp36'] = $lub(sec_lvl('j', null, true, $Γ['global']['findBestPack']), $Λ[$Λ.length - 1].l);
        $Γ['global']['findBestPack']['$tmp36'] instanceof Object ? $Γ['global']['findBestPack']['$tmp36'].Σ = $lub($Γ['global']['findBestPack']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp36'] = $lub($Γ['global']['findBestPack']['$tmp36'], $Λ[$Λ.length - 1].l);
    }
    $upgrade(['best'], $Λ[$Λ.length - 1].l, $Γ['global']['findBestPack']);
    $Λ.pop();
    wgt = 0;
    $scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'] = $Λ[$Λ.length - 1].l;
    val = 0;
    $scope($Γ['global']['findBestPack'], 'val', true)['val'] = $Λ[$Λ.length - 1].l;
    i = 0;
    $scope($Γ['global']['findBestPack'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp39 = best.length;
    $Γ['global']['findBestPack']['$tmp39'] = sec_lvl('best', 'length', false, $Γ['global']['findBestPack']);
    $Γ['global']['findBestPack']['$tmp39'] instanceof Object ? $Γ['global']['findBestPack']['$tmp39'].Σ = $lub($Γ['global']['findBestPack']['$tmp39'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp39'] = $lub($Γ['global']['findBestPack']['$tmp39'], $Λ[$Λ.length - 1].l);
    $tmp38 = i < $tmp39;
    $Γ['global']['findBestPack']['$tmp38'] = $lub(sec_lvl('i', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp39', null, true, $Γ['global']['findBestPack']));
    $Γ['global']['findBestPack']['$tmp38'] instanceof Object ? $Γ['global']['findBestPack']['$tmp38'].Σ = $lub($Γ['global']['findBestPack']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp38'] = $lub($Γ['global']['findBestPack']['$tmp38'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp38', null, true, $Γ['global']['findBestPack'])),
        id: 'LOOP'
    });
    for (; $tmp38;) {
        var $tmp84, $tmp85, $tmp86, $tmp87, $tmp88, $tmp89, $tmp90, $tmp37, $tmp38, $tmp91;
        $Γ['global']['findBestPack']['$tmp91'] = $Γ['global']['findBestPack']['$tmp38'] = $Γ['global']['findBestPack']['$tmp37'] = $Γ['global']['findBestPack']['$tmp90'] = $Γ['global']['findBestPack']['$tmp89'] = $Γ['global']['findBestPack']['$tmp88'] = $Γ['global']['findBestPack']['$tmp87'] = $Γ['global']['findBestPack']['$tmp86'] = $Γ['global']['findBestPack']['$tmp85'] = $Γ['global']['findBestPack']['$tmp84'] = 0;
        $tmp85 = best[i];
        $Γ['global']['findBestPack']['$tmp85'] = sec_lvl('best', i, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp85'] instanceof Object ? $Γ['global']['findBestPack']['$tmp85'].Σ = $lub($Γ['global']['findBestPack']['$tmp85'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp85'] = $lub($Γ['global']['findBestPack']['$tmp85'], $Λ[$Λ.length - 1].l);
        $tmp84 = 0 == $tmp85;
        $Γ['global']['findBestPack']['$tmp84'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp85', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp84'] instanceof Object ? $Γ['global']['findBestPack']['$tmp84'].Σ = $lub($Γ['global']['findBestPack']['$tmp84'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp84'] = $lub($Γ['global']['findBestPack']['$tmp84'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp84', null, true, $Γ['global']['findBestPack'])),
            id: 'IF'
        });
        if ($tmp84) {
            var $tmp37, $tmp38, $tmp92;
            $Γ['global']['findBestPack']['$tmp92'] = $Γ['global']['findBestPack']['$tmp38'] = $Γ['global']['findBestPack']['$tmp37'] = 0;
            $tmp37 = i++;
            $Γ['global']['findBestPack']['$tmp37'] = sec_lvl('i', null, false, $Γ['global']['findBestPack']);
            $Γ['global']['findBestPack']['$tmp37'] instanceof Object ? $Γ['global']['findBestPack']['$tmp37'].Σ = $lub($Γ['global']['findBestPack']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp37'] = $lub($Γ['global']['findBestPack']['$tmp37'], $Λ[$Λ.length - 1].l);
            $tmp92 = best.length;
            $Γ['global']['findBestPack']['$tmp92'] = sec_lvl('best', 'length', false, $Γ['global']['findBestPack']);
            $Γ['global']['findBestPack']['$tmp92'] instanceof Object ? $Γ['global']['findBestPack']['$tmp92'].Σ = $lub($Γ['global']['findBestPack']['$tmp92'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp92'] = $lub($Γ['global']['findBestPack']['$tmp92'], $Λ[$Λ.length - 1].l);
            $tmp38 = i < $tmp92;
            $Γ['global']['findBestPack']['$tmp38'] = $lub(sec_lvl('i', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp92', null, true, $Γ['global']['findBestPack']));
            $Γ['global']['findBestPack']['$tmp38'] instanceof Object ? $Γ['global']['findBestPack']['$tmp38'].Σ = $lub($Γ['global']['findBestPack']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp38'] = $lub($Γ['global']['findBestPack']['$tmp38'], $Λ[$Λ.length - 1].l);
            continue;
            var $shouldComp = { 'lbl': 'LOOP' };
        } else {
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
        $tmp86 = best[i];
        $Γ['global']['findBestPack']['$tmp86'] = sec_lvl('best', i, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp86'] instanceof Object ? $Γ['global']['findBestPack']['$tmp86'].Σ = $lub($Γ['global']['findBestPack']['$tmp86'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp86'] = $lub($Γ['global']['findBestPack']['$tmp86'], $Λ[$Λ.length - 1].l);
        $tmp88 = data[i];
        $Γ['global']['findBestPack']['$tmp88'] = sec_lvl('data', i, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp88'] instanceof Object ? $Γ['global']['findBestPack']['$tmp88'].Σ = $lub($Γ['global']['findBestPack']['$tmp88'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp88'] = $lub($Γ['global']['findBestPack']['$tmp88'], $Λ[$Λ.length - 1].l);
        $tmp87 = $tmp88.weight;
        $Γ['global']['findBestPack']['$tmp87'] = sec_lvl('$tmp88', 'weight', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp87'] instanceof Object ? $Γ['global']['findBestPack']['$tmp87'].Σ = $lub($Γ['global']['findBestPack']['$tmp87'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp87'] = $lub($Γ['global']['findBestPack']['$tmp87'], $Λ[$Λ.length - 1].l);
        wgt += $tmp86 * $tmp87;
        $scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'] = $lub(sec_lvl('$tmp86', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp87', null, true, $Γ['global']['findBestPack']));
        $scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'].Σ = $lub($scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'] = $lub($scope($Γ['global']['findBestPack'], 'wgt', true)['wgt'], $Λ[$Λ.length - 1].l);
        $tmp89 = best[i];
        $Γ['global']['findBestPack']['$tmp89'] = sec_lvl('best', i, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp89'] instanceof Object ? $Γ['global']['findBestPack']['$tmp89'].Σ = $lub($Γ['global']['findBestPack']['$tmp89'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp89'] = $lub($Γ['global']['findBestPack']['$tmp89'], $Λ[$Λ.length - 1].l);
        $tmp88 = data[i];
        $Γ['global']['findBestPack']['$tmp88'] = sec_lvl('data', i, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp88'] instanceof Object ? $Γ['global']['findBestPack']['$tmp88'].Σ = $lub($Γ['global']['findBestPack']['$tmp88'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp88'] = $lub($Γ['global']['findBestPack']['$tmp88'], $Λ[$Λ.length - 1].l);
        $tmp90 = $tmp88.value;
        $Γ['global']['findBestPack']['$tmp90'] = sec_lvl('$tmp88', 'value', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp90'] instanceof Object ? $Γ['global']['findBestPack']['$tmp90'].Σ = $lub($Γ['global']['findBestPack']['$tmp90'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp90'] = $lub($Γ['global']['findBestPack']['$tmp90'], $Λ[$Λ.length - 1].l);
        val += $tmp89 * $tmp90;
        $scope($Γ['global']['findBestPack'], 'val', true)['val'] = $lub(sec_lvl('$tmp89', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp90', null, true, $Γ['global']['findBestPack']));
        $scope($Γ['global']['findBestPack'], 'val', true)['val'] instanceof Object ? $scope($Γ['global']['findBestPack'], 'val', true)['val'].Σ = $lub($scope($Γ['global']['findBestPack'], 'val', true)['val'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['findBestPack'], 'val', true)['val'] = $lub($scope($Γ['global']['findBestPack'], 'val', true)['val'], $Λ[$Λ.length - 1].l);
        $tmp37 = i++;
        $Γ['global']['findBestPack']['$tmp37'] = sec_lvl('i', null, false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp37'] instanceof Object ? $Γ['global']['findBestPack']['$tmp37'].Σ = $lub($Γ['global']['findBestPack']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp37'] = $lub($Γ['global']['findBestPack']['$tmp37'], $Λ[$Λ.length - 1].l);
        $tmp91 = best.length;
        $Γ['global']['findBestPack']['$tmp91'] = sec_lvl('best', 'length', false, $Γ['global']['findBestPack']);
        $Γ['global']['findBestPack']['$tmp91'] instanceof Object ? $Γ['global']['findBestPack']['$tmp91'].Σ = $lub($Γ['global']['findBestPack']['$tmp91'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp91'] = $lub($Γ['global']['findBestPack']['$tmp91'], $Λ[$Λ.length - 1].l);
        $tmp38 = i < $tmp91;
        $Γ['global']['findBestPack']['$tmp38'] = $lub(sec_lvl('i', null, true, $Γ['global']['findBestPack']), sec_lvl('$tmp91', null, true, $Γ['global']['findBestPack']));
        $Γ['global']['findBestPack']['$tmp38'] instanceof Object ? $Γ['global']['findBestPack']['$tmp38'].Σ = $lub($Γ['global']['findBestPack']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp38'] = $lub($Γ['global']['findBestPack']['$tmp38'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $tmp41 = 'Total weight: ' + wgt;
    $Γ['global']['findBestPack']['$tmp41'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('wgt', null, true, $Γ['global']['findBestPack']));
    $Γ['global']['findBestPack']['$tmp41'] instanceof Object ? $Γ['global']['findBestPack']['$tmp41'].Σ = $lub($Γ['global']['findBestPack']['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp41'] = $lub($Γ['global']['findBestPack']['$tmp41'], $Λ[$Λ.length - 1].l);
    $tmp40 = console.log($tmp41);
    $tmp43 = 'Total value: ' + val;
    $Γ['global']['findBestPack']['$tmp43'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('val', null, true, $Γ['global']['findBestPack']));
    $Γ['global']['findBestPack']['$tmp43'] instanceof Object ? $Γ['global']['findBestPack']['$tmp43'].Σ = $lub($Γ['global']['findBestPack']['$tmp43'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['findBestPack']['$tmp43'] = $lub($Γ['global']['findBestPack']['$tmp43'], $Λ[$Λ.length - 1].l);
    $tmp42 = console.log($tmp43);
    return;
}
$rf = $scope($Γ['global'], 'findBestPack', false)['findBestPack'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp22 = findBestPack();
$Γ['global']['$tmp22'] = $Λ.pop().l;
$Γ['global']['$tmp22'] instanceof Object ? $Γ['global']['$tmp22'].Σ = $lub($Γ['global']['$tmp22'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp22'] = $lub($Γ['global']['$tmp22'], $Λ[$Λ.length - 1].l);
