
var $Γ = { 'global': { 'scope': null, 'Σ': 0 } };
var _$tmp;

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

$Γ['global']['hamming'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    n: $Λ[$Λ.length - 1].l,
    nprimes: $Λ[$Λ.length - 1].l
};
$Γ['global']['big'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    exponents: $Λ[$Λ.length - 1].l
};
$Γ['global']['log'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    text: $Λ[$Λ.length - 1].l
};
var _primes, i, nprimes, t, $tmp0, $tmp2;
$Γ['global']['$tmp2'] = $Γ['global']['$tmp0'] = $Γ['global']['t'] = $Γ['global']['nprimes'] = $Γ['global']['i'] = $Γ['global']['_primes'] = 0;
_primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37
];
$Γ['global']['_primes'] = {
    __proto__: {},
    scope: $Γ['global'],
    0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    1: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    2: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    3: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    4: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    5: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    6: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    7: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    8: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    9: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    10: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    11: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
function log(text) {
    var $tmp3;
    $Γ['global']['log']['$tmp3'] = 0;
    $tmp3 = console.log(text);
    return;
}
function big(exponents) {
    var i, e, val, $tmp4, $tmp6, $tmp7, $tmp8;
    $Γ['global']['big']['$tmp8'] = $Γ['global']['big']['$tmp7'] = $Γ['global']['big']['$tmp6'] = $Γ['global']['big']['$tmp4'] = $Γ['global']['big']['val'] = $Γ['global']['big']['e'] = $Γ['global']['big']['i'] = 0;
    val = 1;
    $scope($Γ['global']['big'], 'val', true)['val'] = $Λ[$Λ.length - 1].l;
    i = 0;
    $scope($Γ['global']['big'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp4 = i;
    $Γ['global']['big']['$tmp4'] = sec_lvl('i', null, false, $Γ['global']['big']);
    $Γ['global']['big']['$tmp4'] instanceof Object ? $Γ['global']['big']['$tmp4'].Σ = $lub($Γ['global']['big']['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp4'] = $lub($Γ['global']['big']['$tmp4'], $Λ[$Λ.length - 1].l);
    $tmp7 = exponents.length;
    $Γ['global']['big']['$tmp7'] = sec_lvl('exponents', 'length', false, $Γ['global']['big']);
    $Γ['global']['big']['$tmp7'] instanceof Object ? $Γ['global']['big']['$tmp7'].Σ = $lub($Γ['global']['big']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp7'] = $lub($Γ['global']['big']['$tmp7'], $Λ[$Λ.length - 1].l);
    $tmp6 = i < $tmp7;
    $Γ['global']['big']['$tmp6'] = $lub(sec_lvl('i', null, true, $Γ['global']['big']), sec_lvl('$tmp7', null, true, $Γ['global']['big']));
    $Γ['global']['big']['$tmp6'] instanceof Object ? $Γ['global']['big']['$tmp6'].Σ = $lub($Γ['global']['big']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp6'] = $lub($Γ['global']['big']['$tmp6'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp6', null, true, $Γ['global']['big'])),
        id: 'LOOP'
    });
    for (; $tmp6;) {
        var $tmp9, $tmp11, $tmp12, $tmp5, $tmp6, $tmp13;
        $Γ['global']['big']['$tmp13'] = $Γ['global']['big']['$tmp6'] = $Γ['global']['big']['$tmp5'] = $Γ['global']['big']['$tmp12'] = $Γ['global']['big']['$tmp11'] = $Γ['global']['big']['$tmp9'] = 0;
        e = 0;
        $scope($Γ['global']['big'], 'e', true)['e'] = $Λ[$Λ.length - 1].l;
        $tmp9 = e;
        $Γ['global']['big']['$tmp9'] = sec_lvl('e', null, false, $Γ['global']['big']);
        $Γ['global']['big']['$tmp9'] instanceof Object ? $Γ['global']['big']['$tmp9'].Σ = $lub($Γ['global']['big']['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp9'] = $lub($Γ['global']['big']['$tmp9'], $Λ[$Λ.length - 1].l);
        $tmp12 = exponents[i];
        $Γ['global']['big']['$tmp12'] = sec_lvl('exponents', i, false, $Γ['global']['big']);
        $Γ['global']['big']['$tmp12'] instanceof Object ? $Γ['global']['big']['$tmp12'].Σ = $lub($Γ['global']['big']['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp12'] = $lub($Γ['global']['big']['$tmp12'], $Λ[$Λ.length - 1].l);
        $tmp11 = e < $tmp12;
        $Γ['global']['big']['$tmp11'] = $lub(sec_lvl('e', null, true, $Γ['global']['big']), sec_lvl('$tmp12', null, true, $Γ['global']['big']));
        $Γ['global']['big']['$tmp11'] instanceof Object ? $Γ['global']['big']['$tmp11'].Σ = $lub($Γ['global']['big']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp11'] = $lub($Γ['global']['big']['$tmp11'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp11', null, true, $Γ['global']['big'])),
            id: 'LOOP'
        });
        for (; $tmp11;) {
            var $tmp14, $tmp10, $tmp11, $tmp15;
            $Γ['global']['big']['$tmp15'] = $Γ['global']['big']['$tmp11'] = $Γ['global']['big']['$tmp10'] = $Γ['global']['big']['$tmp14'] = 0;
            $tmp14 = _primes[i];
            $Γ['global']['big']['$tmp14'] = sec_lvl('_primes', i, false, $Γ['global']['big']);
            $Γ['global']['big']['$tmp14'] instanceof Object ? $Γ['global']['big']['$tmp14'].Σ = $lub($Γ['global']['big']['$tmp14'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp14'] = $lub($Γ['global']['big']['$tmp14'], $Λ[$Λ.length - 1].l);
            val = val * $tmp14;
            $scope($Γ['global']['big'], 'val', true)['val'] = $lub(sec_lvl('val', null, true, $Γ['global']['big']), sec_lvl('$tmp14', null, true, $Γ['global']['big']));
            $scope($Γ['global']['big'], 'val', true)['val'] instanceof Object ? $scope($Γ['global']['big'], 'val', true)['val'].Σ = $lub($scope($Γ['global']['big'], 'val', true)['val'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], 'val', true)['val'] = $lub($scope($Γ['global']['big'], 'val', true)['val'], $Λ[$Λ.length - 1].l);
            $tmp10 = e++;
            $Γ['global']['big']['$tmp10'] = sec_lvl('e', null, false, $Γ['global']['big']);
            $Γ['global']['big']['$tmp10'] instanceof Object ? $Γ['global']['big']['$tmp10'].Σ = $lub($Γ['global']['big']['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp10'] = $lub($Γ['global']['big']['$tmp10'], $Λ[$Λ.length - 1].l);
            $tmp15 = exponents[i];
            $Γ['global']['big']['$tmp15'] = sec_lvl('exponents', i, false, $Γ['global']['big']);
            $Γ['global']['big']['$tmp15'] instanceof Object ? $Γ['global']['big']['$tmp15'].Σ = $lub($Γ['global']['big']['$tmp15'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp15'] = $lub($Γ['global']['big']['$tmp15'], $Λ[$Λ.length - 1].l);
            $tmp11 = e < $tmp15;
            $Γ['global']['big']['$tmp11'] = $lub(sec_lvl('e', null, true, $Γ['global']['big']), sec_lvl('$tmp15', null, true, $Γ['global']['big']));
            $Γ['global']['big']['$tmp11'] instanceof Object ? $Γ['global']['big']['$tmp11'].Σ = $lub($Γ['global']['big']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp11'] = $lub($Γ['global']['big']['$tmp11'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        $tmp5 = i++;
        $Γ['global']['big']['$tmp5'] = sec_lvl('i', null, false, $Γ['global']['big']);
        $Γ['global']['big']['$tmp5'] instanceof Object ? $Γ['global']['big']['$tmp5'].Σ = $lub($Γ['global']['big']['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp5'] = $lub($Γ['global']['big']['$tmp5'], $Λ[$Λ.length - 1].l);
        $tmp13 = exponents.length;
        $Γ['global']['big']['$tmp13'] = sec_lvl('exponents', 'length', false, $Γ['global']['big']);
        $Γ['global']['big']['$tmp13'] instanceof Object ? $Γ['global']['big']['$tmp13'].Σ = $lub($Γ['global']['big']['$tmp13'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp13'] = $lub($Γ['global']['big']['$tmp13'], $Λ[$Λ.length - 1].l);
        $tmp6 = i < $tmp13;
        $Γ['global']['big']['$tmp6'] = $lub(sec_lvl('i', null, true, $Γ['global']['big']), sec_lvl('$tmp13', null, true, $Γ['global']['big']));
        $Γ['global']['big']['$tmp6'] instanceof Object ? $Γ['global']['big']['$tmp6'].Σ = $lub($Γ['global']['big']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['big']['$tmp6'] = $lub($Γ['global']['big']['$tmp6'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $tmp8 = val.toString();
    return $tmp8;
}
function hamming(n, nprimes) {
    var i, iter, p, q, min, equal, x, hammings, $tmp16, $tmp18, hammlogs, primelogs, listlogs, $tmp19, $tmp21, indexes, $tmp22, $tmp24, listheads, $tmp25, $tmp27, $tmp28, $tmp30, $tmp31, $tmp32;
    $Γ['global']['hamming']['$tmp32'] = $Γ['global']['hamming']['$tmp31'] = $Γ['global']['hamming']['$tmp30'] = $Γ['global']['hamming']['$tmp28'] = $Γ['global']['hamming']['$tmp27'] = $Γ['global']['hamming']['$tmp25'] = $Γ['global']['hamming']['listheads'] = $Γ['global']['hamming']['$tmp24'] = $Γ['global']['hamming']['$tmp22'] = $Γ['global']['hamming']['indexes'] = $Γ['global']['hamming']['$tmp21'] = $Γ['global']['hamming']['$tmp19'] = $Γ['global']['hamming']['listlogs'] = $Γ['global']['hamming']['primelogs'] = $Γ['global']['hamming']['hammlogs'] = $Γ['global']['hamming']['$tmp18'] = $Γ['global']['hamming']['$tmp16'] = $Γ['global']['hamming']['hammings'] = $Γ['global']['hamming']['x'] = $Γ['global']['hamming']['equal'] = $Γ['global']['hamming']['min'] = $Γ['global']['hamming']['q'] = $Γ['global']['hamming']['p'] = $Γ['global']['hamming']['iter'] = $Γ['global']['hamming']['i'] = 0;
    hammings = new Array(n);
    hammings[0] = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
    $tmp16 = p;
    $Γ['global']['hamming']['$tmp16'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp16'] instanceof Object ? $Γ['global']['hamming']['$tmp16'].Σ = $lub($Γ['global']['hamming']['$tmp16'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp16'] = $lub($Γ['global']['hamming']['$tmp16'], $Λ[$Λ.length - 1].l);
    $tmp18 = p < nprimes;
    $Γ['global']['hamming']['$tmp18'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $Γ['global']['hamming']['$tmp18'] instanceof Object ? $Γ['global']['hamming']['$tmp18'].Σ = $lub($Γ['global']['hamming']['$tmp18'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp18'] = $lub($Γ['global']['hamming']['$tmp18'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp18', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp18;) {
        var $tmp33, $tmp17, $tmp18;
        $Γ['global']['hamming']['$tmp18'] = $Γ['global']['hamming']['$tmp17'] = $Γ['global']['hamming']['$tmp33'] = 0;
        $tmp33 = hammings[0];
        $Γ['global']['hamming']['$tmp33'] = sec_lvl('hammings', 0, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp33'] instanceof Object ? $Γ['global']['hamming']['$tmp33'].Σ = $lub($Γ['global']['hamming']['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp33'] = $lub($Γ['global']['hamming']['$tmp33'], $Λ[$Λ.length - 1].l);
        $tmp33[p] = 0;
        $Γ['global']['hamming']['$tmp33']['p'] = $Λ[$Λ.length - 1].l;
        _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $tmp17 = p++;
        $Γ['global']['hamming']['$tmp17'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp17'] instanceof Object ? $Γ['global']['hamming']['$tmp17'].Σ = $lub($Γ['global']['hamming']['$tmp17'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp17'] = $lub($Γ['global']['hamming']['$tmp17'], $Λ[$Λ.length - 1].l);
        $tmp18 = p < nprimes;
        $Γ['global']['hamming']['$tmp18'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp18'] instanceof Object ? $Γ['global']['hamming']['$tmp18'].Σ = $lub($Γ['global']['hamming']['$tmp18'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp18'] = $lub($Γ['global']['hamming']['$tmp18'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    hammlogs = new Array(n);
    hammlogs[0] = 0;
    $scope($Γ['global']['hamming'], 'hammlogs', false)[0] = $Λ[$Λ.length - 1].l;
    _$tmp = sec_lvl('0', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('0', null, false, $Γ['global']['hamming']).Σ : sec_lvl('0', null, false, $Γ['global']['hamming']);
    primelogs = new Array(nprimes);
    listlogs = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
    $tmp19 = p;
    $Γ['global']['hamming']['$tmp19'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp19'] instanceof Object ? $Γ['global']['hamming']['$tmp19'].Σ = $lub($Γ['global']['hamming']['$tmp19'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp19'] = $lub($Γ['global']['hamming']['$tmp19'], $Λ[$Λ.length - 1].l);
    $tmp21 = p < nprimes;
    $Γ['global']['hamming']['$tmp21'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $Γ['global']['hamming']['$tmp21'] instanceof Object ? $Γ['global']['hamming']['$tmp21'].Σ = $lub($Γ['global']['hamming']['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp21'] = $lub($Γ['global']['hamming']['$tmp21'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp21', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp21;) {
        var $tmp34, $tmp20, $tmp21;
        $Γ['global']['hamming']['$tmp21'] = $Γ['global']['hamming']['$tmp20'] = $Γ['global']['hamming']['$tmp34'] = 0;
        $tmp34 = _primes[p];
        $Γ['global']['hamming']['$tmp34'] = sec_lvl('_primes', p, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp34'] instanceof Object ? $Γ['global']['hamming']['$tmp34'].Σ = $lub($Γ['global']['hamming']['$tmp34'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp34'] = $lub($Γ['global']['hamming']['$tmp34'], $Λ[$Λ.length - 1].l);
        listlogs[p] = Math.log($tmp34);
        primelogs[p] = listlogs[p];
        $scope($Γ['global']['hamming'], 'primelogs', false)[p] = sec_lvl('listlogs', p, false, $Γ['global']['hamming']);
        _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], 'primelogs', false)[p] instanceof Object ? $scope($Γ['global']['hamming'], 'primelogs', false)[p].Σ = $lub($scope($Γ['global']['hamming'], 'primelogs', false)[p].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'primelogs', false)[p] = $lub($scope($Γ['global']['hamming'], 'primelogs', false)[p], _$tmp, $Λ[$Λ.length - 1].l);
        $tmp20 = p++;
        $Γ['global']['hamming']['$tmp20'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp20'] instanceof Object ? $Γ['global']['hamming']['$tmp20'].Σ = $lub($Γ['global']['hamming']['$tmp20'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp20'] = $lub($Γ['global']['hamming']['$tmp20'], $Λ[$Λ.length - 1].l);
        $tmp21 = p < nprimes;
        $Γ['global']['hamming']['$tmp21'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp21'] instanceof Object ? $Γ['global']['hamming']['$tmp21'].Σ = $lub($Γ['global']['hamming']['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp21'] = $lub($Γ['global']['hamming']['$tmp21'], $Λ[$Λ.length - 1].l);
    }
    $upgrade(['listlogs'], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    indexes = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
    $tmp22 = p;
    $Γ['global']['hamming']['$tmp22'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp22'] instanceof Object ? $Γ['global']['hamming']['$tmp22'].Σ = $lub($Γ['global']['hamming']['$tmp22'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp22'] = $lub($Γ['global']['hamming']['$tmp22'], $Λ[$Λ.length - 1].l);
    $tmp24 = p < nprimes;
    $Γ['global']['hamming']['$tmp24'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $Γ['global']['hamming']['$tmp24'] instanceof Object ? $Γ['global']['hamming']['$tmp24'].Σ = $lub($Γ['global']['hamming']['$tmp24'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp24'] = $lub($Γ['global']['hamming']['$tmp24'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp24', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp24;) {
        indexes[p] = 0;
        $scope($Γ['global']['hamming'], 'indexes', false)[p] = $Λ[$Λ.length - 1].l;
        _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        var $tmp23, $tmp24;
        $Γ['global']['hamming']['$tmp24'] = $Γ['global']['hamming']['$tmp23'] = 0;
        $tmp23 = p++;
        $Γ['global']['hamming']['$tmp23'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp23'] instanceof Object ? $Γ['global']['hamming']['$tmp23'].Σ = $lub($Γ['global']['hamming']['$tmp23'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp23'] = $lub($Γ['global']['hamming']['$tmp23'], $Λ[$Λ.length - 1].l);
        $tmp24 = p < nprimes;
        $Γ['global']['hamming']['$tmp24'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp24'] instanceof Object ? $Γ['global']['hamming']['$tmp24'].Σ = $lub($Γ['global']['hamming']['$tmp24'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp24'] = $lub($Γ['global']['hamming']['$tmp24'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    listheads = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
    $tmp25 = p;
    $Γ['global']['hamming']['$tmp25'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp25'] instanceof Object ? $Γ['global']['hamming']['$tmp25'].Σ = $lub($Γ['global']['hamming']['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp25'] = $lub($Γ['global']['hamming']['$tmp25'], $Λ[$Λ.length - 1].l);
    $tmp27 = p < nprimes;
    $Γ['global']['hamming']['$tmp27'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $Γ['global']['hamming']['$tmp27'] instanceof Object ? $Γ['global']['hamming']['$tmp27'].Σ = $lub($Γ['global']['hamming']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp27'] = $lub($Γ['global']['hamming']['$tmp27'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp27', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp27;) {
        listheads[p] = new Array(nprimes);
        var $tmp35, $tmp37, $tmp38, $tmp26, $tmp27;
        $Γ['global']['hamming']['$tmp27'] = $Γ['global']['hamming']['$tmp26'] = $Γ['global']['hamming']['$tmp38'] = $Γ['global']['hamming']['$tmp37'] = $Γ['global']['hamming']['$tmp35'] = 0;
        q = 0;
        $scope($Γ['global']['hamming'], 'q', true)['q'] = $Λ[$Λ.length - 1].l;
        $tmp35 = q;
        $Γ['global']['hamming']['$tmp35'] = sec_lvl('q', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp35'] instanceof Object ? $Γ['global']['hamming']['$tmp35'].Σ = $lub($Γ['global']['hamming']['$tmp35'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp35'] = $lub($Γ['global']['hamming']['$tmp35'], $Λ[$Λ.length - 1].l);
        $tmp37 = q < nprimes;
        $Γ['global']['hamming']['$tmp37'] = $lub(sec_lvl('q', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp37'] instanceof Object ? $Γ['global']['hamming']['$tmp37'].Σ = $lub($Γ['global']['hamming']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp37'] = $lub($Γ['global']['hamming']['$tmp37'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp37', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp37;) {
            var $tmp38, $tmp36, $tmp37;
            $Γ['global']['hamming']['$tmp37'] = $Γ['global']['hamming']['$tmp36'] = $Γ['global']['hamming']['$tmp38'] = 0;
            $tmp38 = listheads[p];
            $Γ['global']['hamming']['$tmp38'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp38'] instanceof Object ? $Γ['global']['hamming']['$tmp38'].Σ = $lub($Γ['global']['hamming']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp38'] = $lub($Γ['global']['hamming']['$tmp38'], $Λ[$Λ.length - 1].l);
            $tmp38[q] = 0;
            $Γ['global']['hamming']['$tmp38']['q'] = $Λ[$Λ.length - 1].l;
            _$tmp = sec_lvl('q', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('q', null, false, $Γ['global']['hamming']).Σ : sec_lvl('q', null, false, $Γ['global']['hamming']);
            $tmp36 = q++;
            $Γ['global']['hamming']['$tmp36'] = sec_lvl('q', null, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp36'] instanceof Object ? $Γ['global']['hamming']['$tmp36'].Σ = $lub($Γ['global']['hamming']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp36'] = $lub($Γ['global']['hamming']['$tmp36'], $Λ[$Λ.length - 1].l);
            $tmp37 = q < nprimes;
            $Γ['global']['hamming']['$tmp37'] = $lub(sec_lvl('q', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $Γ['global']['hamming']['$tmp37'] instanceof Object ? $Γ['global']['hamming']['$tmp37'].Σ = $lub($Γ['global']['hamming']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp37'] = $lub($Γ['global']['hamming']['$tmp37'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        $tmp38 = listheads[p];
        $Γ['global']['hamming']['$tmp38'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp38'] instanceof Object ? $Γ['global']['hamming']['$tmp38'].Σ = $lub($Γ['global']['hamming']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp38'] = $lub($Γ['global']['hamming']['$tmp38'], $Λ[$Λ.length - 1].l);
        $tmp38[p] = 1;
        $Γ['global']['hamming']['$tmp38']['p'] = $Λ[$Λ.length - 1].l;
        _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $tmp26 = p++;
        $Γ['global']['hamming']['$tmp26'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp26'] instanceof Object ? $Γ['global']['hamming']['$tmp26'].Σ = $lub($Γ['global']['hamming']['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp26'] = $lub($Γ['global']['hamming']['$tmp26'], $Λ[$Λ.length - 1].l);
        $tmp27 = p < nprimes;
        $Γ['global']['hamming']['$tmp27'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp27'] instanceof Object ? $Γ['global']['hamming']['$tmp27'].Σ = $lub($Γ['global']['hamming']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp27'] = $lub($Γ['global']['hamming']['$tmp27'], $Λ[$Λ.length - 1].l);
    }
    $upgrade(['listheads'], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    iter = 1;
    $scope($Γ['global']['hamming'], 'iter', true)['iter'] = $Λ[$Λ.length - 1].l;
    $tmp28 = iter;
    $Γ['global']['hamming']['$tmp28'] = sec_lvl('iter', null, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp28'] instanceof Object ? $Γ['global']['hamming']['$tmp28'].Σ = $lub($Γ['global']['hamming']['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp28'] = $lub($Γ['global']['hamming']['$tmp28'], $Λ[$Λ.length - 1].l);
    $tmp30 = iter < n;
    $Γ['global']['hamming']['$tmp30'] = $lub(sec_lvl('iter', null, true, $Γ['global']['hamming']), sec_lvl('n', null, true, $Γ['global']['hamming']));
    $Γ['global']['hamming']['$tmp30'] instanceof Object ? $Γ['global']['hamming']['$tmp30'].Σ = $lub($Γ['global']['hamming']['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp30'] = $lub($Γ['global']['hamming']['$tmp30'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp30', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp30;) {
        min = 0;
        $scope($Γ['global']['hamming'], 'min', true)['min'] = $Λ[$Λ.length - 1].l;
        var $tmp39, $tmp41, $tmp42, $tmp43, $tmp45, $tmp29, $tmp30;
        $Γ['global']['hamming']['$tmp30'] = $Γ['global']['hamming']['$tmp29'] = $Γ['global']['hamming']['$tmp45'] = $Γ['global']['hamming']['$tmp43'] = $Γ['global']['hamming']['$tmp42'] = $Γ['global']['hamming']['$tmp41'] = $Γ['global']['hamming']['$tmp39'] = 0;
        p = 1;
        $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
        $tmp39 = p;
        $Γ['global']['hamming']['$tmp39'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp39'] instanceof Object ? $Γ['global']['hamming']['$tmp39'].Σ = $lub($Γ['global']['hamming']['$tmp39'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp39'] = $lub($Γ['global']['hamming']['$tmp39'], $Λ[$Λ.length - 1].l);
        $tmp41 = p < nprimes;
        $Γ['global']['hamming']['$tmp41'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp41'] instanceof Object ? $Γ['global']['hamming']['$tmp41'].Σ = $lub($Γ['global']['hamming']['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp41'] = $lub($Γ['global']['hamming']['$tmp41'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp41', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp41;) {
            var $tmp46, $tmp47, $tmp48, $tmp40, $tmp41;
            $Γ['global']['hamming']['$tmp41'] = $Γ['global']['hamming']['$tmp40'] = $Γ['global']['hamming']['$tmp48'] = $Γ['global']['hamming']['$tmp47'] = $Γ['global']['hamming']['$tmp46'] = 0;
            $tmp47 = listlogs[p];
            $Γ['global']['hamming']['$tmp47'] = sec_lvl('listlogs', p, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp47'] instanceof Object ? $Γ['global']['hamming']['$tmp47'].Σ = $lub($Γ['global']['hamming']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp47'] = $lub($Γ['global']['hamming']['$tmp47'], $Λ[$Λ.length - 1].l);
            $tmp48 = listlogs[min];
            $Γ['global']['hamming']['$tmp48'] = sec_lvl('listlogs', min, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp48'] instanceof Object ? $Γ['global']['hamming']['$tmp48'].Σ = $lub($Γ['global']['hamming']['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp48'] = $lub($Γ['global']['hamming']['$tmp48'], $Λ[$Λ.length - 1].l);
            $tmp46 = $tmp47 < $tmp48;
            $Γ['global']['hamming']['$tmp46'] = $lub(sec_lvl('$tmp47', null, true, $Γ['global']['hamming']), sec_lvl('$tmp48', null, true, $Γ['global']['hamming']));
            $Γ['global']['hamming']['$tmp46'] instanceof Object ? $Γ['global']['hamming']['$tmp46'].Σ = $lub($Γ['global']['hamming']['$tmp46'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp46'] = $lub($Γ['global']['hamming']['$tmp46'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp46', null, true, $Γ['global']['hamming'])),
                id: 'IF'
            });
            if ($tmp46) {
                min = p;
                $scope($Γ['global']['hamming'], 'min', true)['min'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], 'min', true)['min'] instanceof Object ? $scope($Γ['global']['hamming'], 'min', true)['min'].Σ = $lub($scope($Γ['global']['hamming'], 'min', true)['min'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'min', true)['min'] = $lub($scope($Γ['global']['hamming'], 'min', true)['min'], $Λ[$Λ.length - 1].l);
            } else {
            }
            $Λ.pop();
            $tmp40 = p++;
            $Γ['global']['hamming']['$tmp40'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp40'] instanceof Object ? $Γ['global']['hamming']['$tmp40'].Σ = $lub($Γ['global']['hamming']['$tmp40'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp40'] = $lub($Γ['global']['hamming']['$tmp40'], $Λ[$Λ.length - 1].l);
            $tmp41 = p < nprimes;
            $Γ['global']['hamming']['$tmp41'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $Γ['global']['hamming']['$tmp41'] instanceof Object ? $Γ['global']['hamming']['$tmp41'].Σ = $lub($Γ['global']['hamming']['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp41'] = $lub($Γ['global']['hamming']['$tmp41'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        hammlogs[iter] = listlogs[min];
        $scope($Γ['global']['hamming'], 'hammlogs', false)[iter] = sec_lvl('listlogs', min, false, $Γ['global']['hamming']);
        _$tmp = sec_lvl('iter', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('iter', null, false, $Γ['global']['hamming']).Σ : sec_lvl('iter', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], 'hammlogs', false)[iter] instanceof Object ? $scope($Γ['global']['hamming'], 'hammlogs', false)[iter].Σ = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)[iter].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'hammlogs', false)[iter] = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)[iter], _$tmp, $Λ[$Λ.length - 1].l);
        $tmp42 = listheads[min];
        $Γ['global']['hamming']['$tmp42'] = sec_lvl('listheads', min, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp42'] instanceof Object ? $Γ['global']['hamming']['$tmp42'].Σ = $lub($Γ['global']['hamming']['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp42'] = $lub($Γ['global']['hamming']['$tmp42'], $Λ[$Λ.length - 1].l);
        hammings[iter] = $tmp42.slice();
        p = 0;
        $scope($Γ['global']['hamming'], 'p', true)['p'] = $Λ[$Λ.length - 1].l;
        $tmp43 = p;
        $Γ['global']['hamming']['$tmp43'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp43'] instanceof Object ? $Γ['global']['hamming']['$tmp43'].Σ = $lub($Γ['global']['hamming']['$tmp43'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp43'] = $lub($Γ['global']['hamming']['$tmp43'], $Λ[$Λ.length - 1].l);
        $tmp45 = p < nprimes;
        $Γ['global']['hamming']['$tmp45'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp45'] instanceof Object ? $Γ['global']['hamming']['$tmp45'].Σ = $lub($Γ['global']['hamming']['$tmp45'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp45'] = $lub($Γ['global']['hamming']['$tmp45'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp45', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp45;) {
            equal = true;
            $scope($Γ['global']['hamming'], 'equal', true)['equal'] = $Λ[$Λ.length - 1].l;
            var $tmp49, $tmp51, $tmp44, $tmp45;
            $Γ['global']['hamming']['$tmp45'] = $Γ['global']['hamming']['$tmp44'] = $Γ['global']['hamming']['$tmp51'] = $Γ['global']['hamming']['$tmp49'] = 0;
            i = 0;
            $scope($Γ['global']['hamming'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
            $tmp49 = i;
            $Γ['global']['hamming']['$tmp49'] = sec_lvl('i', null, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp49'] instanceof Object ? $Γ['global']['hamming']['$tmp49'].Σ = $lub($Γ['global']['hamming']['$tmp49'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp49'] = $lub($Γ['global']['hamming']['$tmp49'], $Λ[$Λ.length - 1].l);
            $tmp51 = i < nprimes;
            $Γ['global']['hamming']['$tmp51'] = $lub(sec_lvl('i', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $Γ['global']['hamming']['$tmp51'] instanceof Object ? $Γ['global']['hamming']['$tmp51'].Σ = $lub($Γ['global']['hamming']['$tmp51'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp51'] = $lub($Γ['global']['hamming']['$tmp51'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp51', null, true, $Γ['global']['hamming'])),
                id: 'LOOP'
            });
            for (; $tmp51;) {
                var $tmp52, $tmp53, $tmp54, $tmp55, $tmp38, $tmp50, $tmp51;
                $Γ['global']['hamming']['$tmp51'] = $Γ['global']['hamming']['$tmp50'] = $Γ['global']['hamming']['$tmp38'] = $Γ['global']['hamming']['$tmp55'] = $Γ['global']['hamming']['$tmp54'] = $Γ['global']['hamming']['$tmp53'] = $Γ['global']['hamming']['$tmp52'] = 0;
                $tmp54 = hammings[iter];
                $Γ['global']['hamming']['$tmp54'] = sec_lvl('hammings', iter, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp54'] instanceof Object ? $Γ['global']['hamming']['$tmp54'].Σ = $lub($Γ['global']['hamming']['$tmp54'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp54'] = $lub($Γ['global']['hamming']['$tmp54'], $Λ[$Λ.length - 1].l);
                $tmp53 = $tmp54[i];
                $Γ['global']['hamming']['$tmp53'] = sec_lvl('$tmp54', i, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp53'] instanceof Object ? $Γ['global']['hamming']['$tmp53'].Σ = $lub($Γ['global']['hamming']['$tmp53'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp53'] = $lub($Γ['global']['hamming']['$tmp53'], $Λ[$Λ.length - 1].l);
                $tmp38 = listheads[p];
                $Γ['global']['hamming']['$tmp38'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp38'] instanceof Object ? $Γ['global']['hamming']['$tmp38'].Σ = $lub($Γ['global']['hamming']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp38'] = $lub($Γ['global']['hamming']['$tmp38'], $Λ[$Λ.length - 1].l);
                $tmp55 = $tmp38[i];
                $Γ['global']['hamming']['$tmp55'] = sec_lvl('$tmp38', i, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp55'] instanceof Object ? $Γ['global']['hamming']['$tmp55'].Σ = $lub($Γ['global']['hamming']['$tmp55'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp55'] = $lub($Γ['global']['hamming']['$tmp55'], $Λ[$Λ.length - 1].l);
                $tmp52 = $tmp53 != $tmp55;
                $Γ['global']['hamming']['$tmp52'] = $lub(sec_lvl('$tmp53', null, true, $Γ['global']['hamming']), sec_lvl('$tmp55', null, true, $Γ['global']['hamming']));
                $Γ['global']['hamming']['$tmp52'] instanceof Object ? $Γ['global']['hamming']['$tmp52'].Σ = $lub($Γ['global']['hamming']['$tmp52'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp52'] = $lub($Γ['global']['hamming']['$tmp52'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp52', null, true, $Γ['global']['hamming'])),
                    id: 'IF'
                });
                if ($tmp52) {
                    equal = false;
                    $scope($Γ['global']['hamming'], 'equal', true)['equal'] = $Λ[$Λ.length - 1].l;
                    break;
                    var $shouldComp = { 'lbl': 'LOOP' };
                } else {
                }
                if ($shouldComp)
                    $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                $Λ.pop();
                $tmp50 = i++;
                $Γ['global']['hamming']['$tmp50'] = sec_lvl('i', null, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp50'] instanceof Object ? $Γ['global']['hamming']['$tmp50'].Σ = $lub($Γ['global']['hamming']['$tmp50'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp50'] = $lub($Γ['global']['hamming']['$tmp50'], $Λ[$Λ.length - 1].l);
                $tmp51 = i < nprimes;
                $Γ['global']['hamming']['$tmp51'] = $lub(sec_lvl('i', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
                $Γ['global']['hamming']['$tmp51'] instanceof Object ? $Γ['global']['hamming']['$tmp51'].Σ = $lub($Γ['global']['hamming']['$tmp51'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp51'] = $lub($Γ['global']['hamming']['$tmp51'], $Λ[$Λ.length - 1].l);
            }
            $Λ.pop();
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('equal', null, true, $Γ['global']['hamming'])),
                id: 'IF'
            });
            if (equal) {
                x = ++indexes[p];
                $scope($Γ['global']['hamming'], 'x', true)['x'] = sec_lvl('indexes', p, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], 'x', true)['x'] instanceof Object ? $scope($Γ['global']['hamming'], 'x', true)['x'].Σ = $lub($scope($Γ['global']['hamming'], 'x', true)['x'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'x', true)['x'] = $lub($scope($Γ['global']['hamming'], 'x', true)['x'], $Λ[$Λ.length - 1].l);
                var $tmp56, $tmp38, $tmp57, $tmp58;
                $Γ['global']['hamming']['$tmp58'] = $Γ['global']['hamming']['$tmp57'] = $Γ['global']['hamming']['$tmp38'] = $Γ['global']['hamming']['$tmp56'] = 0;
                $tmp56 = hammings[x];
                $Γ['global']['hamming']['$tmp56'] = sec_lvl('hammings', x, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp56'] instanceof Object ? $Γ['global']['hamming']['$tmp56'].Σ = $lub($Γ['global']['hamming']['$tmp56'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp56'] = $lub($Γ['global']['hamming']['$tmp56'], $Λ[$Λ.length - 1].l);
                listheads[p] = $tmp56.slice();
                $tmp38 = listheads[p];
                $Γ['global']['hamming']['$tmp38'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp38'] instanceof Object ? $Γ['global']['hamming']['$tmp38'].Σ = $lub($Γ['global']['hamming']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp38'] = $lub($Γ['global']['hamming']['$tmp38'], $Λ[$Λ.length - 1].l);
                $tmp38[p] += 1;
                $Γ['global']['hamming']['$tmp38']['p'] = $Λ[$Λ.length - 1].l;
                _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
                $tmp57 = hammlogs[x];
                $Γ['global']['hamming']['$tmp57'] = sec_lvl('hammlogs', x, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp57'] instanceof Object ? $Γ['global']['hamming']['$tmp57'].Σ = $lub($Γ['global']['hamming']['$tmp57'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp57'] = $lub($Γ['global']['hamming']['$tmp57'], $Λ[$Λ.length - 1].l);
                $tmp58 = primelogs[p];
                $Γ['global']['hamming']['$tmp58'] = sec_lvl('primelogs', p, false, $Γ['global']['hamming']);
                $Γ['global']['hamming']['$tmp58'] instanceof Object ? $Γ['global']['hamming']['$tmp58'].Σ = $lub($Γ['global']['hamming']['$tmp58'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp58'] = $lub($Γ['global']['hamming']['$tmp58'], $Λ[$Λ.length - 1].l);
                listlogs[p] = $tmp57 + $tmp58;
                $scope($Γ['global']['hamming'], 'listlogs', false)[p] = $lub(sec_lvl('$tmp57', null, true, $Γ['global']['hamming']), sec_lvl('$tmp58', null, true, $Γ['global']['hamming']));
                _$tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], 'listlogs', false)[p] instanceof Object ? $scope($Γ['global']['hamming'], 'listlogs', false)[p].Σ = $lub($scope($Γ['global']['hamming'], 'listlogs', false)[p].Σ, _$tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'listlogs', false)[p] = $lub($scope($Γ['global']['hamming'], 'listlogs', false)[p], _$tmp, $Λ[$Λ.length - 1].l);
            } else {
                $upgrade(['listheads'], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
            }
            $Λ.pop();
            $tmp44 = p++;
            $Γ['global']['hamming']['$tmp44'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
            $Γ['global']['hamming']['$tmp44'] instanceof Object ? $Γ['global']['hamming']['$tmp44'].Σ = $lub($Γ['global']['hamming']['$tmp44'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp44'] = $lub($Γ['global']['hamming']['$tmp44'], $Λ[$Λ.length - 1].l);
            $tmp45 = p < nprimes;
            $Γ['global']['hamming']['$tmp45'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $Γ['global']['hamming']['$tmp45'] instanceof Object ? $Γ['global']['hamming']['$tmp45'].Σ = $lub($Γ['global']['hamming']['$tmp45'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp45'] = $lub($Γ['global']['hamming']['$tmp45'], $Λ[$Λ.length - 1].l);
        }
        $upgrade(['listheads'], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
        $Λ.pop();
        $tmp29 = iter++;
        $Γ['global']['hamming']['$tmp29'] = sec_lvl('iter', null, false, $Γ['global']['hamming']);
        $Γ['global']['hamming']['$tmp29'] instanceof Object ? $Γ['global']['hamming']['$tmp29'].Σ = $lub($Γ['global']['hamming']['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp29'] = $lub($Γ['global']['hamming']['$tmp29'], $Λ[$Λ.length - 1].l);
        $tmp30 = iter < n;
        $Γ['global']['hamming']['$tmp30'] = $lub(sec_lvl('iter', null, true, $Γ['global']['hamming']), sec_lvl('n', null, true, $Γ['global']['hamming']));
        $Γ['global']['hamming']['$tmp30'] instanceof Object ? $Γ['global']['hamming']['$tmp30'].Σ = $lub($Γ['global']['hamming']['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp30'] = $lub($Γ['global']['hamming']['$tmp30'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'hammings',
        'listheads'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    $tmp32 = n - 1;
    $Γ['global']['hamming']['$tmp32'] = $lub(sec_lvl('n', null, true, $Γ['global']['hamming']), $Λ[$Λ.length - 1].l);
    $Γ['global']['hamming']['$tmp32'] instanceof Object ? $Γ['global']['hamming']['$tmp32'].Σ = $lub($Γ['global']['hamming']['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp32'] = $lub($Γ['global']['hamming']['$tmp32'], $Λ[$Λ.length - 1].l);
    $tmp31 = hammings[$tmp32];
    $Γ['global']['hamming']['$tmp31'] = sec_lvl('hammings', $tmp32, false, $Γ['global']['hamming']);
    $Γ['global']['hamming']['$tmp31'] instanceof Object ? $Γ['global']['hamming']['$tmp31'].Σ = $lub($Γ['global']['hamming']['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['hamming']['$tmp31'] = $lub($Γ['global']['hamming']['$tmp31'], $Λ[$Λ.length - 1].l);
    return $tmp31;
}
t = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    1691
];
$Γ['global']['t'] = {
    __proto__: {},
    scope: $Γ['global'],
    0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    1: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    2: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    3: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    4: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    5: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    6: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    7: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    8: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    9: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    10: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    11: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    12: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    13: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    14: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    15: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    16: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    17: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    18: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    19: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    20: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
nprimes = 3;
$Γ['global']['nprimes'] = $Λ[$Λ.length - 1].l;
$tmp0 = nprimes;
$Γ['global']['$tmp0'] = sec_lvl('nprimes', null, false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp2 = nprimes <= 4;
$Γ['global']['$tmp2'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
$Λ.push({
    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp2', null, true, $Γ['global'])),
    id: 'LOOP'
});
for (; $tmp2;) {
    var $tmp59, $tmp60, $tmp61, $tmp62, $tmp63, $tmp65, $tmp66, $tmp1, $tmp2;
    $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp66'] = $Γ['global']['$tmp65'] = $Γ['global']['$tmp63'] = $Γ['global']['$tmp62'] = $Γ['global']['$tmp61'] = $Γ['global']['$tmp60'] = $Γ['global']['$tmp59'] = 0;
    $tmp62 = nprimes - 1;
    $Γ['global']['$tmp62'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Γ['global']['$tmp62'] instanceof Object ? $Γ['global']['$tmp62'].Σ = $lub($Γ['global']['$tmp62'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp62'] = $lub($Γ['global']['$tmp62'], $Λ[$Λ.length - 1].l);
    $tmp61 = _primes[$tmp62];
    $Γ['global']['$tmp61'] = sec_lvl('_primes', $tmp62, false, $Γ['global']);
    $Γ['global']['$tmp61'] instanceof Object ? $Γ['global']['$tmp61'].Σ = $lub($Γ['global']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp61'] = $lub($Γ['global']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp60 = $tmp61 + '-Smooth:';
    $Γ['global']['$tmp60'] = $lub(sec_lvl('$tmp61', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Γ['global']['$tmp60'] instanceof Object ? $Γ['global']['$tmp60'].Σ = $lub($Γ['global']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp60'] = $lub($Γ['global']['$tmp60'], $Λ[$Λ.length - 1].l);
    $rf = $scope($Γ['global'], 'log', false)['log'];
    $rf.scope = $Γ['global'];
    $rf.$this = $Γ['global'];
    $rf['text'] = $lub(sec_lvl('$tmp60', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp59 = log($tmp60);
    $Γ['global']['$tmp59'] = $Λ.pop().l;
    $Γ['global']['$tmp59'] instanceof Object ? $Γ['global']['$tmp59'].Σ = $lub($Γ['global']['$tmp59'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp59'] = $lub($Γ['global']['$tmp59'], $Λ[$Λ.length - 1].l);
    i = 0;
    $Γ['global']['i'] = $Λ[$Λ.length - 1].l;
    $tmp63 = i;
    $Γ['global']['$tmp63'] = sec_lvl('i', null, false, $Γ['global']);
    $Γ['global']['$tmp63'] instanceof Object ? $Γ['global']['$tmp63'].Σ = $lub($Γ['global']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp63'] = $lub($Γ['global']['$tmp63'], $Λ[$Λ.length - 1].l);
    $tmp66 = t.length;
    $Γ['global']['$tmp66'] = {
        Σ: 0,
        prototype: { Σ: $Λ[$Λ.length - 1].l }
    };
    $Γ['global']['$tmp66'] instanceof Object ? $Γ['global']['$tmp66'].Σ = $lub($Γ['global']['$tmp66'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp66'] = $lub($Γ['global']['$tmp66'], $Λ[$Λ.length - 1].l);
    $tmp65 = i < $tmp66;
    $Γ['global']['$tmp65'] = $lub(sec_lvl('i', null, true, $Γ['global']), sec_lvl('$tmp66', null, true, $Γ['global']));
    $Γ['global']['$tmp65'] instanceof Object ? $Γ['global']['$tmp65'].Σ = $lub($Γ['global']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp65'] = $lub($Γ['global']['$tmp65'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp65', null, true, $Γ['global'])),
        id: 'LOOP'
    });
    for (; $tmp65;) {
        var $tmp67, $tmp68, $tmp69, $tmp70, $tmp71, $tmp72, $tmp73, $tmp64, $tmp65, $tmp74;
        $Γ['global']['$tmp74'] = $Γ['global']['$tmp65'] = $Γ['global']['$tmp64'] = $Γ['global']['$tmp73'] = $Γ['global']['$tmp72'] = $Γ['global']['$tmp71'] = $Γ['global']['$tmp70'] = $Γ['global']['$tmp69'] = $Γ['global']['$tmp68'] = $Γ['global']['$tmp67'] = 0;
        $tmp70 = t[i];
        $Γ['global']['$tmp70'] = {
            Σ: 0,
            prototype: { Σ: $Λ[$Λ.length - 1].l }
        };
        $Γ['global']['$tmp70'] instanceof Object ? $Γ['global']['$tmp70'].Σ = $lub($Γ['global']['$tmp70'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp70'] = $lub($Γ['global']['$tmp70'], $Λ[$Λ.length - 1].l);
        $tmp69 = $tmp70 + ':';
        $Γ['global']['$tmp69'] = $lub(sec_lvl('$tmp70', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
        $Γ['global']['$tmp69'] instanceof Object ? $Γ['global']['$tmp69'].Σ = $lub($Γ['global']['$tmp69'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp69'] = $lub($Γ['global']['$tmp69'], $Λ[$Λ.length - 1].l);
        $tmp73 = t[i];
        $Γ['global']['$tmp73'] = {
            Σ: 0,
            prototype: { Σ: $Λ[$Λ.length - 1].l }
        };
        $Γ['global']['$tmp73'] instanceof Object ? $Γ['global']['$tmp73'].Σ = $lub($Γ['global']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp73'] = $lub($Γ['global']['$tmp73'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'hamming', false)['hamming'];
        $rf.scope = $Γ['global'];
        $rf.$this = $Γ['global'];
        $rf['n'] = $lub(sec_lvl('$tmp73', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
        $rf['nprimes'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp72 = hamming($tmp73, nprimes);
        $Γ['global']['$tmp72'] = $Λ.pop().l;
        $Γ['global']['$tmp72'] instanceof Object ? $Γ['global']['$tmp72'].Σ = $lub($Γ['global']['$tmp72'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp72'] = $lub($Γ['global']['$tmp72'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'big', false)['big'];
        $rf.scope = $Γ['global'];
        $rf.$this = $Γ['global'];
        $rf['exponents'] = $lub(sec_lvl('$tmp72', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp71 = big($tmp72);
        $Γ['global']['$tmp71'] = $Λ.pop().l;
        $Γ['global']['$tmp71'] instanceof Object ? $Γ['global']['$tmp71'].Σ = $lub($Γ['global']['$tmp71'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp71'] = $lub($Γ['global']['$tmp71'], $Λ[$Λ.length - 1].l);
        $tmp68 = $tmp69 + $tmp71;
        $Γ['global']['$tmp68'] = $lub(sec_lvl('$tmp69', null, true, $Γ['global']), sec_lvl('$tmp71', null, true, $Γ['global']));
        $Γ['global']['$tmp68'] instanceof Object ? $Γ['global']['$tmp68'].Σ = $lub($Γ['global']['$tmp68'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp68'] = $lub($Γ['global']['$tmp68'], $Λ[$Λ.length - 1].l);
        $tmp67 = console.log($tmp68);
        $tmp64 = i++;
        $Γ['global']['$tmp64'] = sec_lvl('i', null, false, $Γ['global']);
        $Γ['global']['$tmp64'] instanceof Object ? $Γ['global']['$tmp64'].Σ = $lub($Γ['global']['$tmp64'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp64'] = $lub($Γ['global']['$tmp64'], $Λ[$Λ.length - 1].l);
        $tmp74 = t.length;
        $Γ['global']['$tmp74'] = {
            Σ: 0,
            prototype: { Σ: $Λ[$Λ.length - 1].l }
        };
        $Γ['global']['$tmp74'] instanceof Object ? $Γ['global']['$tmp74'].Σ = $lub($Γ['global']['$tmp74'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp74'] = $lub($Γ['global']['$tmp74'], $Λ[$Λ.length - 1].l);
        $tmp65 = i < $tmp74;
        $Γ['global']['$tmp65'] = $lub(sec_lvl('i', null, true, $Γ['global']), sec_lvl('$tmp74', null, true, $Γ['global']));
        $Γ['global']['$tmp65'] instanceof Object ? $Γ['global']['$tmp65'].Σ = $lub($Γ['global']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp65'] = $lub($Γ['global']['$tmp65'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        '$tmp72',
        '$tmp71',
        '$tmp67'
    ], $Λ[$Λ.length - 1].l, $Γ['global']);
    $Λ.pop();
    $tmp1 = nprimes++;
    $Γ['global']['$tmp1'] = sec_lvl('nprimes', null, false, $Γ['global']);
    $Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
    $tmp2 = nprimes <= 4;
    $Γ['global']['$tmp2'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
}
$upgrade([
    '$tmp59',
    '$tmp72',
    '$tmp71',
    '$tmp67'
], $Λ[$Λ.length - 1].l, $Γ['global']);
$Λ.pop();
