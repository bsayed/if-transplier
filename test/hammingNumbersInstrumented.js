////$old_pc = $pc;
////while($pc.id !== 'LOOP')
////    $Λ.pop();
////blah:while(true) {
////    break ;
////}
////while(true) {
////    if(true) {
////        x[y] = a;
////        z['w'] = new b[c]();
////        a.b = 'blah';
////        k = 8;
////        break
////    } else {
////        done = true;
////        throw x;
////    }
////}
//
////a = !b + c++;
//

//function bubbleSort(a) {
//    var swapped;
//    do {
//        swapped = false;
//        for (var i = 0; i < a.length - 1; i++) {
//            if (a[i] > a[i + 1]) {
//                var temp = a[i];
//                a[i] = a[i + 1];
//                a[i + 1] = temp;
//                swapped = true;
//            }
//        }
//    } while (swapped);
//}
//function qsort(arr)
//{
//    var stack = [arr];
//    var sorted = [];
//
//    while (stack.length) {
//
//        var temp = stack.pop(), tl = temp.length;
//
//        if (tl == 1) {
//            sorted.push(temp[0]);
//            continue;
//        }
//        var pivot = temp[0];
//        var left = [], right = [];
//
//        for (var i = 1; i < tl; i++) {
//            if (temp[i] < pivot) {
//                left.push(temp[i]);
//            } else {
//                right.push(temp[i]);
//            }
//        }
//
//        left.push(pivot);
//
//        if (right.length)
//            stack.push(right);
//        if (left.length)
//            stack.push(left);
//
//    }
//
//    console.log(sorted);
//}

//
//try{
//    //g();
//} catch(x) {
//    h();
//} finally {
//k();
//}
////(x instanceof Object)? a=b: x=z;
////x.y = 'hello';
////x.foo.z = function (x, y, z) {
////    function bar(a, b) {
////
////        //doWhile:do {
////        //    while(x > 0) {
////        //        if (true) {
////        //            x[y] = a;
////        //            z['w'] = new b[c]();
////        //            a.b = 'blah';
////        //            k = 8;
////        //            //break
////        //        } else {
////        //            done = true;
////        //            throw x;
////        //        }
////        //    }
////        //}while(y < 0 );
////
////        return a;
////
////    }
////
////    return bar('x', 'y');
////};
////a = new x.foo.z(1);
//
////foo instanceof Object;
////var obj;
////obj.x = {label:"",first:k,second:g()};
////var ar = [x, y,z,w]
////$Λ[$Λ.len - 2].l;
////$Λ[$Λ.len − 2] ;
//

var $Γ = {'global': {'$scope': null, 'Σ': 0}};

$Γ['global'].this = $Γ['global'];
$Λ = [{'l': 0, id: 'global'}];
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
    do {
        if ($$cs.hasOwnProperty($var))
            return $$cs;
    } while ($$cs = $$cs.scope);

    if (isLHS) {
        $Γ['global'][$var] = 0;
        return $Γ['global'][$var];
    } else
        throw new Error("Can't find variable " + $var + " in scope chain: "+ $$cs);
}

function $prop(obj, prop, $$cs) {
    var $ro, $tmp;
    $ro = $tmp = $scope($$cs, obj, false);

    do {
        if ($ro.hasOwnProperty(prop))
            return $ro[prop];
    } while ($ro = $ro['__proto__']);
    // if isFuncProb
    return $tmp.Σ;
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

function $upgrade(varArray,lvl,$$cs) {

}

function sec_lvl(obj, prop, getValue, $$cs) {
    var result;
    if (prop !== null) {
        result = $prop(obj, ""+prop, $$cs);
    } else {
        result = $scope($$cs, obj, false);
    }
    if (getValue) {
        return (result instanceof Object) ? result.Σ : result;
    } else {
        return result;
    }
}

var _primes, i, t, $tmp0, $tmp2;
$Γ['global']['$tmp2'] = $Γ['global']['$tmp0'] = $Γ['global']['t'] = $Γ['global']['i'] = $Γ['global']['_primes'] = 0;
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
$Γ['global']['_primes'] = $lub(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
$Γ['global']['_primes'] instanceof Object ? $Γ['global']['_primes'].Σ = $lub($Γ['global']['_primes'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['_primes'] = $lub($Γ['global']['_primes'], $Λ[$Λ.length - 1].l);
$Γ['global']['_primes'] = {
    __proto__: null,
    $scope: $Γ['global'],
    0: $lub($Λ[$Λ.length - 1].l, 0),
    1: $lub($Λ[$Λ.length - 1].l, 0),
    2: $lub($Λ[$Λ.length - 1].l, 0),
    3: $lub($Λ[$Λ.length - 1].l, 0),
    4: $lub($Λ[$Λ.length - 1].l, 0),
    5: $lub($Λ[$Λ.length - 1].l, 0),
    6: $lub($Λ[$Λ.length - 1].l, 0),
    7: $lub($Λ[$Λ.length - 1].l, 0),
    8: $lub($Λ[$Λ.length - 1].l, 0),
    9: $lub($Λ[$Λ.length - 1].l, 0),
    10: $lub($Λ[$Λ.length - 1].l, 0),
    11: $lub($Λ[$Λ.length - 1].l, 0),
    Σ: $lub(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $Λ[$Λ.length - 1].l)
};
function log(text) {
    var $tmp3;
    $Γ['global']['log']['$tmp3'] = 0;
    $tmp3 = console.log(text);
}
$Γ['global']['log'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    text: $Λ[$Λ.length - 1].l
};
function big(exponents) {
    var i, e, val, $tmp4, $tmp6, $tmp7, $tmp8;
    $Γ['global']['big']['$tmp8'] = $Γ['global']['big']['$tmp7'] = $Γ['global']['big']['$tmp6'] = $Γ['global']['big']['$tmp4'] = $Γ['global']['big']['val'] = $Γ['global']['big']['e'] = $Γ['global']['big']['i'] = 0;
    val = 1;
    $scope($Γ['global']['big'], 'val', true)['val'] = 0;
    $scope($Γ['global']['big'], 'val', true)['val'] instanceof Object ? $scope($Γ['global']['big'], 'val', true)['val'].Σ = $lub($scope($Γ['global']['big'], 'val', true)['val'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], 'val', true)['val'] = $lub($scope($Γ['global']['big'], 'val', true)['val'], $Λ[$Λ.length - 1].l);
    i = 0;
    $scope($Γ['global']['big'], 'i', true)['i'] = 0;
    $scope($Γ['global']['big'], 'i', true)['i'] instanceof Object ? $scope($Γ['global']['big'], 'i', true)['i'].Σ = $lub($scope($Γ['global']['big'], 'i', true)['i'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], 'i', true)['i'] = $lub($scope($Γ['global']['big'], 'i', true)['i'], $Λ[$Λ.length - 1].l);
    $tmp4 = i;
    $scope($Γ['global']['big'], '$tmp4', true)['$tmp4'] = sec_lvl('i', null, false, $Γ['global']['big']);
    $scope($Γ['global']['big'], '$tmp4', true)['$tmp4'] instanceof Object ? $scope($Γ['global']['big'], '$tmp4', true)['$tmp4'].Σ = $lub($scope($Γ['global']['big'], '$tmp4', true)['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp4', true)['$tmp4'] = $lub($scope($Γ['global']['big'], '$tmp4', true)['$tmp4'], $Λ[$Λ.length - 1].l);
    $tmp7 = exponents.length;
    $scope($Γ['global']['big'], '$tmp7', true)['$tmp7'] = sec_lvl('exponents', 'length', false, $Γ['global']['big']);
    $scope($Γ['global']['big'], '$tmp7', true)['$tmp7'] instanceof Object ? $scope($Γ['global']['big'], '$tmp7', true)['$tmp7'].Σ = $lub($scope($Γ['global']['big'], '$tmp7', true)['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp7', true)['$tmp7'] = $lub($scope($Γ['global']['big'], '$tmp7', true)['$tmp7'], $Λ[$Λ.length - 1].l);
    $tmp6 = i < $tmp7;
    $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] = $lub(sec_lvl('i', null, true, $Γ['global']['big']), sec_lvl('$tmp7', null, true, $Γ['global']['big']));
    $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] instanceof Object ? $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'].Σ = $lub($scope($Γ['global']['big'], '$tmp6', true)['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] = $lub($scope($Γ['global']['big'], '$tmp6', true)['$tmp6'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp6', null, true, $Γ['global']['big'])),
        id: 'LOOP'
    });
    for (; $tmp6;) {
        var $tmp9, $tmp11, $tmp12, $tmp5, $tmp6, $tmp13;
        $Γ['global']['big']['$tmp13'] = $Γ['global']['big']['$tmp6'] = $Γ['global']['big']['$tmp5'] = $Γ['global']['big']['$tmp12'] = $Γ['global']['big']['$tmp11'] = $Γ['global']['big']['$tmp9'] = 0;
        e = 0;
        $scope($Γ['global']['big'], 'e', true)['e'] = 0;
        $scope($Γ['global']['big'], 'e', true)['e'] instanceof Object ? $scope($Γ['global']['big'], 'e', true)['e'].Σ = $lub($scope($Γ['global']['big'], 'e', true)['e'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], 'e', true)['e'] = $lub($scope($Γ['global']['big'], 'e', true)['e'], $Λ[$Λ.length - 1].l);
        $tmp9 = e;
        $scope($Γ['global']['big'], '$tmp9', true)['$tmp9'] = sec_lvl('e', null, false, $Γ['global']['big']);
        $scope($Γ['global']['big'], '$tmp9', true)['$tmp9'] instanceof Object ? $scope($Γ['global']['big'], '$tmp9', true)['$tmp9'].Σ = $lub($scope($Γ['global']['big'], '$tmp9', true)['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp9', true)['$tmp9'] = $lub($scope($Γ['global']['big'], '$tmp9', true)['$tmp9'], $Λ[$Λ.length - 1].l);
        $tmp12 = exponents[i];
        $scope($Γ['global']['big'], '$tmp12', true)['$tmp12'] = sec_lvl('exponents', i, false, $Γ['global']['big']);
        $scope($Γ['global']['big'], '$tmp12', true)['$tmp12'] instanceof Object ? $scope($Γ['global']['big'], '$tmp12', true)['$tmp12'].Σ = $lub($scope($Γ['global']['big'], '$tmp12', true)['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp12', true)['$tmp12'] = $lub($scope($Γ['global']['big'], '$tmp12', true)['$tmp12'], $Λ[$Λ.length - 1].l);
        $tmp11 = e < $tmp12;
        $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] = $lub(sec_lvl('e', null, true, $Γ['global']['big']), sec_lvl('$tmp12', null, true, $Γ['global']['big']));
        $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] instanceof Object ? $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'].Σ = $lub($scope($Γ['global']['big'], '$tmp11', true)['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] = $lub($scope($Γ['global']['big'], '$tmp11', true)['$tmp11'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp11', null, true, $Γ['global']['big'])),
            id: 'LOOP'
        });
        for (; $tmp11;) {
            var $tmp14, $tmp10, $tmp11, $tmp15;
            $Γ['global']['big']['$tmp15'] = $Γ['global']['big']['$tmp11'] = $Γ['global']['big']['$tmp10'] = $Γ['global']['big']['$tmp14'] = 0;
            $tmp14 = _primes[i];
            $scope($Γ['global']['big'], '$tmp14', true)['$tmp14'] = sec_lvl('_primes', i, false, $Γ['global']['big']);
            $scope($Γ['global']['big'], '$tmp14', true)['$tmp14'] instanceof Object ? $scope($Γ['global']['big'], '$tmp14', true)['$tmp14'].Σ = $lub($scope($Γ['global']['big'], '$tmp14', true)['$tmp14'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp14', true)['$tmp14'] = $lub($scope($Γ['global']['big'], '$tmp14', true)['$tmp14'], $Λ[$Λ.length - 1].l);
            val = val * $tmp14;
            $scope($Γ['global']['big'], 'val', true)['val'] = $lub(sec_lvl('val', null, true, $Γ['global']['big']), sec_lvl('$tmp14', null, true, $Γ['global']['big']));
            $scope($Γ['global']['big'], 'val', true)['val'] instanceof Object ? $scope($Γ['global']['big'], 'val', true)['val'].Σ = $lub($scope($Γ['global']['big'], 'val', true)['val'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], 'val', true)['val'] = $lub($scope($Γ['global']['big'], 'val', true)['val'], $Λ[$Λ.length - 1].l);
            $tmp10 = e++;
            $scope($Γ['global']['big'], '$tmp10', true)['$tmp10'] = sec_lvl('e', null, false, $Γ['global']['big']);
            $scope($Γ['global']['big'], '$tmp10', true)['$tmp10'] instanceof Object ? $scope($Γ['global']['big'], '$tmp10', true)['$tmp10'].Σ = $lub($scope($Γ['global']['big'], '$tmp10', true)['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp10', true)['$tmp10'] = $lub($scope($Γ['global']['big'], '$tmp10', true)['$tmp10'], $Λ[$Λ.length - 1].l);
            $tmp15 = exponents[i];
            $scope($Γ['global']['big'], '$tmp15', true)['$tmp15'] = sec_lvl('exponents', i, false, $Γ['global']['big']);
            $scope($Γ['global']['big'], '$tmp15', true)['$tmp15'] instanceof Object ? $scope($Γ['global']['big'], '$tmp15', true)['$tmp15'].Σ = $lub($scope($Γ['global']['big'], '$tmp15', true)['$tmp15'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp15', true)['$tmp15'] = $lub($scope($Γ['global']['big'], '$tmp15', true)['$tmp15'], $Λ[$Λ.length - 1].l);
            $tmp11 = e < $tmp15;
            $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] = $lub(sec_lvl('e', null, true, $Γ['global']['big']), sec_lvl('$tmp15', null, true, $Γ['global']['big']));
            $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] instanceof Object ? $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'].Σ = $lub($scope($Γ['global']['big'], '$tmp11', true)['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp11', true)['$tmp11'] = $lub($scope($Γ['global']['big'], '$tmp11', true)['$tmp11'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        $tmp5 = i++;
        $scope($Γ['global']['big'], '$tmp5', true)['$tmp5'] = sec_lvl('i', null, false, $Γ['global']['big']);
        $scope($Γ['global']['big'], '$tmp5', true)['$tmp5'] instanceof Object ? $scope($Γ['global']['big'], '$tmp5', true)['$tmp5'].Σ = $lub($scope($Γ['global']['big'], '$tmp5', true)['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp5', true)['$tmp5'] = $lub($scope($Γ['global']['big'], '$tmp5', true)['$tmp5'], $Λ[$Λ.length - 1].l);
        $tmp13 = exponents.length;
        $scope($Γ['global']['big'], '$tmp13', true)['$tmp13'] = sec_lvl('exponents', 'length', false, $Γ['global']['big']);
        $scope($Γ['global']['big'], '$tmp13', true)['$tmp13'] instanceof Object ? $scope($Γ['global']['big'], '$tmp13', true)['$tmp13'].Σ = $lub($scope($Γ['global']['big'], '$tmp13', true)['$tmp13'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp13', true)['$tmp13'] = $lub($scope($Γ['global']['big'], '$tmp13', true)['$tmp13'], $Λ[$Λ.length - 1].l);
        $tmp6 = i < $tmp13;
        $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] = $lub(sec_lvl('i', null, true, $Γ['global']['big']), sec_lvl('$tmp13', null, true, $Γ['global']['big']));
        $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] instanceof Object ? $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'].Σ = $lub($scope($Γ['global']['big'], '$tmp6', true)['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['big'], '$tmp6', true)['$tmp6'] = $lub($scope($Γ['global']['big'], '$tmp6', true)['$tmp6'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $tmp8 = val.toString();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['big'], '$tmp8')['$tmp8'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['big'].InvokedAsContr) {
            $Γ['global']['big'].this.Σ = $lub($Γ['global']['big'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['big'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp8;
}
$Γ['global']['big'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    exponents: $Λ[$Λ.length - 1].l
};
function hamming(n, nprimes) {
    var i, iter, p, q, min, equal, x, hammings, $tmp16, $tmp18, hammlogs, primelogs, listlogs, $tmp19, $tmp21, indexes, $tmp22, $tmp24, listheads, $tmp25, $tmp27, $tmp28, $tmp30, $tmp31, $tmp32;
    $Γ['global']['hamming']['$tmp32'] = $Γ['global']['hamming']['$tmp31'] = $Γ['global']['hamming']['$tmp30'] = $Γ['global']['hamming']['$tmp28'] = $Γ['global']['hamming']['$tmp27'] = $Γ['global']['hamming']['$tmp25'] = $Γ['global']['hamming']['listheads'] = $Γ['global']['hamming']['$tmp24'] = $Γ['global']['hamming']['$tmp22'] = $Γ['global']['hamming']['indexes'] = $Γ['global']['hamming']['$tmp21'] = $Γ['global']['hamming']['$tmp19'] = $Γ['global']['hamming']['listlogs'] = $Γ['global']['hamming']['primelogs'] = $Γ['global']['hamming']['hammlogs'] = $Γ['global']['hamming']['$tmp18'] = $Γ['global']['hamming']['$tmp16'] = $Γ['global']['hamming']['hammings'] = $Γ['global']['hamming']['x'] = $Γ['global']['hamming']['equal'] = $Γ['global']['hamming']['min'] = $Γ['global']['hamming']['q'] = $Γ['global']['hamming']['p'] = $Γ['global']['hamming']['iter'] = $Γ['global']['hamming']['i'] = 0;
    hammings = new Array(n);
    hammings[0] = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
    $tmp16 = p;
    $scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'] = $lub($scope($Γ['global']['hamming'], '$tmp16', true)['$tmp16'], $Λ[$Λ.length - 1].l);
    $tmp18 = p < nprimes;
    $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] = $lub($scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp18', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp18;) {
        var $tmp, $tmp17, $tmp18;
        $Γ['global']['hamming']['$tmp18'] = $Γ['global']['hamming']['$tmp17'] = $Γ['global']['hamming']['$tmp'] = 0;
        $tmp = hammings[0];
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('hammings', 0, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp[p] = 0;
        $scope($Γ['global']['hamming'], '$tmp', false)['p'] = 0;
        $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', false)['p'] = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
        $tmp17 = p++;
        $scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'] = $lub($scope($Γ['global']['hamming'], '$tmp17', true)['$tmp17'], $Λ[$Λ.length - 1].l);
        $tmp18 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'] = $lub($scope($Γ['global']['hamming'], '$tmp18', true)['$tmp18'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    hammlogs = new Array(n);
    hammlogs[0] = 0;
    $scope($Γ['global']['hamming'], 'hammlogs', false)['0'] = 0;
    $tmp = sec_lvl('0', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('0', null, false, $Γ['global']['hamming']).Σ : sec_lvl('0', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], 'hammlogs', false)['0'] instanceof Object ? $scope($Γ['global']['hamming'], 'hammlogs', false)['0'].Σ = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)['0'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'hammlogs', false)['0'] = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)['0'], $tmp, $Λ[$Λ.length - 1].l);
    primelogs = new Array(nprimes);
    listlogs = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
    $tmp19 = p;
    $scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'] = $lub($scope($Γ['global']['hamming'], '$tmp19', true)['$tmp19'], $Λ[$Λ.length - 1].l);
    $tmp21 = p < nprimes;
    $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] = $lub($scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp21', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp21;) {
        var $tmp33, $tmp20, $tmp21;
        $Γ['global']['hamming']['$tmp21'] = $Γ['global']['hamming']['$tmp20'] = $Γ['global']['hamming']['$tmp33'] = 0;
        $tmp33 = _primes[p];
        $scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'] = sec_lvl('_primes', p, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'] = $lub($scope($Γ['global']['hamming'], '$tmp33', true)['$tmp33'], $Λ[$Λ.length - 1].l);
        listlogs[p] = Math.log($tmp33);
        primelogs[p] = listlogs[p];
        $scope($Γ['global']['hamming'], 'primelogs', false)['p'] = sec_lvl('listlogs', p, false, $Γ['global']['hamming']);
        $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], 'primelogs', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'primelogs', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'primelogs', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'primelogs', false)['p'] = $lub($scope($Γ['global']['hamming'], 'primelogs', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
        $tmp20 = p++;
        $scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'] = $lub($scope($Γ['global']['hamming'], '$tmp20', true)['$tmp20'], $Λ[$Λ.length - 1].l);
        $tmp21 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'] = $lub($scope($Γ['global']['hamming'], '$tmp21', true)['$tmp21'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'Math.log',
        'listlogs'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    indexes = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
    $tmp22 = p;
    $scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'] = $lub($scope($Γ['global']['hamming'], '$tmp22', true)['$tmp22'], $Λ[$Λ.length - 1].l);
    $tmp24 = p < nprimes;
    $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] = $lub($scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp24', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp24;) {
        indexes[p] = 0;
        $scope($Γ['global']['hamming'], 'indexes', false)['p'] = 0;
        $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], 'indexes', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'indexes', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'indexes', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'indexes', false)['p'] = $lub($scope($Γ['global']['hamming'], 'indexes', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
        var $tmp23, $tmp24;
        $Γ['global']['hamming']['$tmp24'] = $Γ['global']['hamming']['$tmp23'] = 0;
        $tmp23 = p++;
        $scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'] = $lub($scope($Γ['global']['hamming'], '$tmp23', true)['$tmp23'], $Λ[$Λ.length - 1].l);
        $tmp24 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'] = $lub($scope($Γ['global']['hamming'], '$tmp24', true)['$tmp24'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    listheads = new Array(nprimes);
    p = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
    $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
    $tmp25 = p;
    $scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'] = $lub($scope($Γ['global']['hamming'], '$tmp25', true)['$tmp25'], $Λ[$Λ.length - 1].l);
    $tmp27 = p < nprimes;
    $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
    $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] = $lub($scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp27', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp27;) {
        listheads[p] = new Array(nprimes);
        var $tmp34, $tmp36, $tmp, $tmp26, $tmp27;
        $Γ['global']['hamming']['$tmp27'] = $Γ['global']['hamming']['$tmp26'] = $Γ['global']['hamming']['$tmp'] = $Γ['global']['hamming']['$tmp36'] = $Γ['global']['hamming']['$tmp34'] = 0;
        q = 0;
        $scope($Γ['global']['hamming'], 'q', true)['q'] = 0;
        $scope($Γ['global']['hamming'], 'q', true)['q'] instanceof Object ? $scope($Γ['global']['hamming'], 'q', true)['q'].Σ = $lub($scope($Γ['global']['hamming'], 'q', true)['q'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'q', true)['q'] = $lub($scope($Γ['global']['hamming'], 'q', true)['q'], $Λ[$Λ.length - 1].l);
        $tmp34 = q;
        $scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'] = sec_lvl('q', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'] = $lub($scope($Γ['global']['hamming'], '$tmp34', true)['$tmp34'], $Λ[$Λ.length - 1].l);
        $tmp36 = q < nprimes;
        $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] = $lub(sec_lvl('q', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] = $lub($scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp36', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp36;) {
            var $tmp, $tmp35, $tmp36;
            $Γ['global']['hamming']['$tmp36'] = $Γ['global']['hamming']['$tmp35'] = $Γ['global']['hamming']['$tmp'] = 0;
            $tmp = listheads[p];
            $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp[q] = 0;
            $scope($Γ['global']['hamming'], '$tmp', false)['q'] = 0;
            $tmp = sec_lvl('q', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('q', null, false, $Γ['global']['hamming']).Σ : sec_lvl('q', null, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp', false)['q'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', false)['q'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', false)['q'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', false)['q'] = $lub($scope($Γ['global']['hamming'], '$tmp', false)['q'], $tmp, $Λ[$Λ.length - 1].l);
            $tmp35 = q++;
            $scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'] = sec_lvl('q', null, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'] = $lub($scope($Γ['global']['hamming'], '$tmp35', true)['$tmp35'], $Λ[$Λ.length - 1].l);
            $tmp36 = q < nprimes;
            $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] = $lub(sec_lvl('q', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'] = $lub($scope($Γ['global']['hamming'], '$tmp36', true)['$tmp36'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        $tmp = listheads[p];
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp[p] = 1;
        $scope($Γ['global']['hamming'], '$tmp', false)['p'] = 0;
        $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', false)['p'] = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
        $tmp26 = p++;
        $scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'] = $lub($scope($Γ['global']['hamming'], '$tmp26', true)['$tmp26'], $Λ[$Λ.length - 1].l);
        $tmp27 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'] = $lub($scope($Γ['global']['hamming'], '$tmp27', true)['$tmp27'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'Array',
        'listheads'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    iter = 1;
    $scope($Γ['global']['hamming'], 'iter', true)['iter'] = 0;
    $scope($Γ['global']['hamming'], 'iter', true)['iter'] instanceof Object ? $scope($Γ['global']['hamming'], 'iter', true)['iter'].Σ = $lub($scope($Γ['global']['hamming'], 'iter', true)['iter'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'iter', true)['iter'] = $lub($scope($Γ['global']['hamming'], 'iter', true)['iter'], $Λ[$Λ.length - 1].l);
    $tmp28 = iter;
    $scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'] = sec_lvl('iter', null, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'] = $lub($scope($Γ['global']['hamming'], '$tmp28', true)['$tmp28'], $Λ[$Λ.length - 1].l);
    $tmp30 = iter < n;
    $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] = $lub(sec_lvl('iter', null, true, $Γ['global']['hamming']), sec_lvl('n', null, true, $Γ['global']['hamming']));
    $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] = $lub($scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp30', null, true, $Γ['global']['hamming'])),
        id: 'LOOP'
    });
    for (; $tmp30;) {
        min = 0;
        $scope($Γ['global']['hamming'], 'min', true)['min'] = 0;
        $scope($Γ['global']['hamming'], 'min', true)['min'] instanceof Object ? $scope($Γ['global']['hamming'], 'min', true)['min'].Σ = $lub($scope($Γ['global']['hamming'], 'min', true)['min'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'min', true)['min'] = $lub($scope($Γ['global']['hamming'], 'min', true)['min'], $Λ[$Λ.length - 1].l);
        var $tmp37, $tmp39, $tmp, $tmp40, $tmp42, $tmp29, $tmp30;
        $Γ['global']['hamming']['$tmp30'] = $Γ['global']['hamming']['$tmp29'] = $Γ['global']['hamming']['$tmp42'] = $Γ['global']['hamming']['$tmp40'] = $Γ['global']['hamming']['$tmp'] = $Γ['global']['hamming']['$tmp39'] = $Γ['global']['hamming']['$tmp37'] = 0;
        p = 1;
        $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
        $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
        $tmp37 = p;
        $scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'] = $lub($scope($Γ['global']['hamming'], '$tmp37', true)['$tmp37'], $Λ[$Λ.length - 1].l);
        $tmp39 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] = $lub($scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp39', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp39;) {
            var $tmp43, $tmp44, $tmp45, $tmp38, $tmp39;
            $Γ['global']['hamming']['$tmp39'] = $Γ['global']['hamming']['$tmp38'] = $Γ['global']['hamming']['$tmp45'] = $Γ['global']['hamming']['$tmp44'] = $Γ['global']['hamming']['$tmp43'] = 0;
            $tmp44 = listlogs[p];
            $scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'] = sec_lvl('listlogs', p, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'] = $lub($scope($Γ['global']['hamming'], '$tmp44', true)['$tmp44'], $Λ[$Λ.length - 1].l);
            $tmp45 = listlogs[min];
            $scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'] = sec_lvl('listlogs', min, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'] = $lub($scope($Γ['global']['hamming'], '$tmp45', true)['$tmp45'], $Λ[$Λ.length - 1].l);
            $tmp43 = $tmp44 < $tmp45;
            $scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'] = $lub(sec_lvl('$tmp44', null, true, $Γ['global']['hamming']), sec_lvl('$tmp45', null, true, $Γ['global']['hamming']));
            $scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'] = $lub($scope($Γ['global']['hamming'], '$tmp43', true)['$tmp43'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp43', null, true, $Γ['global']['hamming'])),
                id: 'IF'
            });
            if ($tmp43) {
                min = p;
                $scope($Γ['global']['hamming'], 'min', true)['min'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], 'min', true)['min'] instanceof Object ? $scope($Γ['global']['hamming'], 'min', true)['min'].Σ = $lub($scope($Γ['global']['hamming'], 'min', true)['min'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'min', true)['min'] = $lub($scope($Γ['global']['hamming'], 'min', true)['min'], $Λ[$Λ.length - 1].l);
            } else {
            }
            $Λ.pop();
            $tmp38 = p++;
            $scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'] = $lub($scope($Γ['global']['hamming'], '$tmp38', true)['$tmp38'], $Λ[$Λ.length - 1].l);
            $tmp39 = p < nprimes;
            $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'] = $lub($scope($Γ['global']['hamming'], '$tmp39', true)['$tmp39'], $Λ[$Λ.length - 1].l);
        }
        $Λ.pop();
        hammlogs[iter] = listlogs[min];
        $scope($Γ['global']['hamming'], 'hammlogs', false)['iter'] = sec_lvl('listlogs', min, false, $Γ['global']['hamming']);
        $tmp = sec_lvl('iter', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('iter', null, false, $Γ['global']['hamming']).Σ : sec_lvl('iter', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], 'hammlogs', false)['iter'] instanceof Object ? $scope($Γ['global']['hamming'], 'hammlogs', false)['iter'].Σ = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)['iter'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'hammlogs', false)['iter'] = $lub($scope($Γ['global']['hamming'], 'hammlogs', false)['iter'], $tmp, $Λ[$Λ.length - 1].l);
        $tmp = listheads[min];
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('listheads', min, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
        hammings[iter] = $tmp.slice();
        p = 0;
        $scope($Γ['global']['hamming'], 'p', true)['p'] = 0;
        $scope($Γ['global']['hamming'], 'p', true)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'p', true)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'p', true)['p'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'p', true)['p'] = $lub($scope($Γ['global']['hamming'], 'p', true)['p'], $Λ[$Λ.length - 1].l);
        $tmp40 = p;
        $scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'] = $lub($scope($Γ['global']['hamming'], '$tmp40', true)['$tmp40'], $Λ[$Λ.length - 1].l);
        $tmp42 = p < nprimes;
        $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] = $lub($scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp42', null, true, $Γ['global']['hamming'])),
            id: 'LOOP'
        });
        for (; $tmp42;) {
            equal = true;
            $scope($Γ['global']['hamming'], 'equal', true)['equal'] = 0;
            $scope($Γ['global']['hamming'], 'equal', true)['equal'] instanceof Object ? $scope($Γ['global']['hamming'], 'equal', true)['equal'].Σ = $lub($scope($Γ['global']['hamming'], 'equal', true)['equal'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'equal', true)['equal'] = $lub($scope($Γ['global']['hamming'], 'equal', true)['equal'], $Λ[$Λ.length - 1].l);
            var $tmp46, $tmp48, $tmp41, $tmp42;
            $Γ['global']['hamming']['$tmp42'] = $Γ['global']['hamming']['$tmp41'] = $Γ['global']['hamming']['$tmp48'] = $Γ['global']['hamming']['$tmp46'] = 0;
            i = 0;
            $scope($Γ['global']['hamming'], 'i', true)['i'] = 0;
            $scope($Γ['global']['hamming'], 'i', true)['i'] instanceof Object ? $scope($Γ['global']['hamming'], 'i', true)['i'].Σ = $lub($scope($Γ['global']['hamming'], 'i', true)['i'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'i', true)['i'] = $lub($scope($Γ['global']['hamming'], 'i', true)['i'], $Λ[$Λ.length - 1].l);
            $tmp46 = i;
            $scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'] = sec_lvl('i', null, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'] = $lub($scope($Γ['global']['hamming'], '$tmp46', true)['$tmp46'], $Λ[$Λ.length - 1].l);
            $tmp48 = i < nprimes;
            $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] = $lub(sec_lvl('i', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] = $lub($scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp48', null, true, $Γ['global']['hamming'])),
                id: 'LOOP'
            });
            for (; $tmp48;) {
                var $tmp49, $tmp50, $tmp, $tmp51, $tmp47, $tmp48;
                $Γ['global']['hamming']['$tmp48'] = $Γ['global']['hamming']['$tmp47'] = $Γ['global']['hamming']['$tmp51'] = $Γ['global']['hamming']['$tmp'] = $Γ['global']['hamming']['$tmp50'] = $Γ['global']['hamming']['$tmp49'] = 0;
                $tmp = hammings[iter];
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('hammings', iter, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
                $tmp50 = $tmp[i];
                $scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'] = sec_lvl('$tmp', i, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'] = $lub($scope($Γ['global']['hamming'], '$tmp50', true)['$tmp50'], $Λ[$Λ.length - 1].l);
                $tmp = listheads[p];
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
                $tmp51 = $tmp[i];
                $scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'] = sec_lvl('$tmp', i, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'] = $lub($scope($Γ['global']['hamming'], '$tmp51', true)['$tmp51'], $Λ[$Λ.length - 1].l);
                $tmp49 = $tmp50 != $tmp51;
                $scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'] = $lub(sec_lvl('$tmp50', null, true, $Γ['global']['hamming']), sec_lvl('$tmp51', null, true, $Γ['global']['hamming']));
                $scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'] = $lub($scope($Γ['global']['hamming'], '$tmp49', true)['$tmp49'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp49', null, true, $Γ['global']['hamming'])),
                    id: 'IF'
                });
                if ($tmp49) {
                    equal = false;
                    $scope($Γ['global']['hamming'], 'equal', true)['equal'] = 0;
                    $scope($Γ['global']['hamming'], 'equal', true)['equal'] instanceof Object ? $scope($Γ['global']['hamming'], 'equal', true)['equal'].Σ = $lub($scope($Γ['global']['hamming'], 'equal', true)['equal'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'equal', true)['equal'] = $lub($scope($Γ['global']['hamming'], 'equal', true)['equal'], $Λ[$Λ.length - 1].l);
                    break;
                    var $shouldComp = { 'lbl': 'LOOP' };
                } else {
                }
                if ($shouldComp)
                    $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                $Λ.pop();
                $tmp47 = i++;
                $scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'] = sec_lvl('i', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'] = $lub($scope($Γ['global']['hamming'], '$tmp47', true)['$tmp47'], $Λ[$Λ.length - 1].l);
                $tmp48 = i < nprimes;
                $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] = $lub(sec_lvl('i', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
                $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'] = $lub($scope($Γ['global']['hamming'], '$tmp48', true)['$tmp48'], $Λ[$Λ.length - 1].l);
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
                var $tmp, $tmp52, $tmp53;
                $Γ['global']['hamming']['$tmp53'] = $Γ['global']['hamming']['$tmp52'] = $Γ['global']['hamming']['$tmp'] = 0;
                $tmp = hammings[x];
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('hammings', x, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
                listheads[p] = $tmp.slice();
                $tmp = listheads[p];
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = sec_lvl('listheads', p, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', true)['$tmp'] = $lub($scope($Γ['global']['hamming'], '$tmp', true)['$tmp'], $Λ[$Λ.length - 1].l);
                $tmp[p] += 1;
                $scope($Γ['global']['hamming'], '$tmp', false)['p'] = 0;
                $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp', false)['p'] = $lub($scope($Γ['global']['hamming'], '$tmp', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
                $tmp52 = hammlogs[x];
                $scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'] = sec_lvl('hammlogs', x, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'] = $lub($scope($Γ['global']['hamming'], '$tmp52', true)['$tmp52'], $Λ[$Λ.length - 1].l);
                $tmp53 = primelogs[p];
                $scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'] = sec_lvl('primelogs', p, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'] = $lub($scope($Γ['global']['hamming'], '$tmp53', true)['$tmp53'], $Λ[$Λ.length - 1].l);
                listlogs[p] = $tmp52 + $tmp53;
                $scope($Γ['global']['hamming'], 'listlogs', false)['p'] = $lub(sec_lvl('$tmp52', null, true, $Γ['global']['hamming']), sec_lvl('$tmp53', null, true, $Γ['global']['hamming']));
                $tmp = sec_lvl('p', null, false, $Γ['global']['hamming']) instanceof Object ? sec_lvl('p', null, false, $Γ['global']['hamming']).Σ : sec_lvl('p', null, false, $Γ['global']['hamming']);
                $scope($Γ['global']['hamming'], 'listlogs', false)['p'] instanceof Object ? $scope($Γ['global']['hamming'], 'listlogs', false)['p'].Σ = $lub($scope($Γ['global']['hamming'], 'listlogs', false)['p'].Σ, $tmp, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], 'listlogs', false)['p'] = $lub($scope($Γ['global']['hamming'], 'listlogs', false)['p'], $tmp, $Λ[$Λ.length - 1].l);
            } else {
                $upgrade([
                    '$tmp.slice',
                    'listheads'
                ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
            }
            $Λ.pop();
            $tmp41 = p++;
            $scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'] = sec_lvl('p', null, false, $Γ['global']['hamming']);
            $scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'] = $lub($scope($Γ['global']['hamming'], '$tmp41', true)['$tmp41'], $Λ[$Λ.length - 1].l);
            $tmp42 = p < nprimes;
            $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] = $lub(sec_lvl('p', null, true, $Γ['global']['hamming']), sec_lvl('nprimes', null, true, $Γ['global']['hamming']));
            $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'] = $lub($scope($Γ['global']['hamming'], '$tmp42', true)['$tmp42'], $Λ[$Λ.length - 1].l);
        }
        $upgrade([
            '$tmp.slice',
            'listheads'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
        $Λ.pop();
        $tmp29 = iter++;
        $scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'] = sec_lvl('iter', null, false, $Γ['global']['hamming']);
        $scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'] = $lub($scope($Γ['global']['hamming'], '$tmp29', true)['$tmp29'], $Λ[$Λ.length - 1].l);
        $tmp30 = iter < n;
        $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] = $lub(sec_lvl('iter', null, true, $Γ['global']['hamming']), sec_lvl('n', null, true, $Γ['global']['hamming']));
        $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'] = $lub($scope($Γ['global']['hamming'], '$tmp30', true)['$tmp30'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        '$tmp.slice',
        'hammings',
        'listheads'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['hamming']);
    $Λ.pop();
    $tmp32 = n - 1;
    $scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'] = $lub(sec_lvl('n', null, true, $Γ['global']['hamming']), 0);
    $scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'] = $lub($scope($Γ['global']['hamming'], '$tmp32', true)['$tmp32'], $Λ[$Λ.length - 1].l);
    $tmp31 = hammings[$tmp32];
    $scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'] = sec_lvl('hammings', $tmp32, false, $Γ['global']['hamming']);
    $scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'] instanceof Object ? $scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'].Σ = $lub($scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'] = $lub($scope($Γ['global']['hamming'], '$tmp31', true)['$tmp31'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['hamming'], '$tmp31')['$tmp31'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['hamming'].InvokedAsContr) {
            $Γ['global']['hamming'].this.Σ = $lub($Γ['global']['hamming'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['hamming'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp31;
}
$Γ['global']['hamming'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    n: $Λ[$Λ.length - 1].l,
    nprimes: $Λ[$Λ.length - 1].l
};
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
$Γ['global']['t'] = $lub(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
$Γ['global']['t'] instanceof Object ? $Γ['global']['t'].Σ = $lub($Γ['global']['t'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['t'] = $lub($Γ['global']['t'], $Λ[$Λ.length - 1].l);
$Γ['global']['t'] = {
    __proto__: null,
    $scope: $Γ['global'],
    0: $lub($Λ[$Λ.length - 1].l, 0),
    1: $lub($Λ[$Λ.length - 1].l, 0),
    2: $lub($Λ[$Λ.length - 1].l, 0),
    3: $lub($Λ[$Λ.length - 1].l, 0),
    4: $lub($Λ[$Λ.length - 1].l, 0),
    5: $lub($Λ[$Λ.length - 1].l, 0),
    6: $lub($Λ[$Λ.length - 1].l, 0),
    7: $lub($Λ[$Λ.length - 1].l, 0),
    8: $lub($Λ[$Λ.length - 1].l, 0),
    9: $lub($Λ[$Λ.length - 1].l, 0),
    10: $lub($Λ[$Λ.length - 1].l, 0),
    11: $lub($Λ[$Λ.length - 1].l, 0),
    12: $lub($Λ[$Λ.length - 1].l, 0),
    13: $lub($Λ[$Λ.length - 1].l, 0),
    14: $lub($Λ[$Λ.length - 1].l, 0),
    15: $lub($Λ[$Λ.length - 1].l, 0),
    16: $lub($Λ[$Λ.length - 1].l, 0),
    17: $lub($Λ[$Λ.length - 1].l, 0),
    18: $lub($Λ[$Λ.length - 1].l, 0),
    19: $lub($Λ[$Λ.length - 1].l, 0),
    20: $lub($Λ[$Λ.length - 1].l, 0),
    Σ: $lub(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $Λ[$Λ.length - 1].l)
};
nprimes = 3;
$Γ['global']['nprimes'] = 0;
$Γ['global']['nprimes'] instanceof Object ? $Γ['global']['nprimes'].Σ = $lub($Γ['global']['nprimes'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['nprimes'] = $lub($Γ['global']['nprimes'], $Λ[$Λ.length - 1].l);
$tmp0 = nprimes;
$Γ['global']['$tmp0'] = sec_lvl('nprimes', null, false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp2 = nprimes <= 4;
$Γ['global']['$tmp2'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), 0);
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
$Λ.push({
    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp2', null, true, $Γ['global'])),
    id: 'LOOP'
});
for (; $tmp2;) {
    var start, $tmp54, $tmp55, $tmp56, $tmp57, $tmp58, $tmp60, $tmp61, end, $tmp62, $tmp63, $tmp64, $tmp65, $tmp66, $tmp1, $tmp2;
    $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp66'] = $Γ['global']['$tmp65'] = $Γ['global']['$tmp64'] = $Γ['global']['$tmp63'] = $Γ['global']['$tmp62'] = $Γ['global']['end'] = $Γ['global']['$tmp61'] = $Γ['global']['$tmp60'] = $Γ['global']['$tmp58'] = $Γ['global']['$tmp57'] = $Γ['global']['$tmp56'] = $Γ['global']['$tmp55'] = $Γ['global']['$tmp54'] = $Γ['global']['start'] = 0;
    start = new Date();
    $tmp57 = nprimes - 1;
    $Γ['global']['$tmp57'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), 0);
    $Γ['global']['$tmp57'] instanceof Object ? $Γ['global']['$tmp57'].Σ = $lub($Γ['global']['$tmp57'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp57'] = $lub($Γ['global']['$tmp57'], $Λ[$Λ.length - 1].l);
    $tmp56 = _primes[$tmp57];
    $Γ['global']['$tmp56'] = sec_lvl('_primes', $tmp57, false, $Γ['global']);
    $Γ['global']['$tmp56'] instanceof Object ? $Γ['global']['$tmp56'].Σ = $lub($Γ['global']['$tmp56'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp56'] = $lub($Γ['global']['$tmp56'], $Λ[$Λ.length - 1].l);
    $tmp55 = $tmp56 + '-Smooth:';
    $Γ['global']['$tmp55'] = $lub(sec_lvl('$tmp56', null, true, $Γ['global']), 0);
    $Γ['global']['$tmp55'] instanceof Object ? $Γ['global']['$tmp55'].Σ = $lub($Γ['global']['$tmp55'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp55'] = $lub($Γ['global']['$tmp55'], $Λ[$Λ.length - 1].l);
    $rf = $scope($Γ['global'], 'log', false)['log'];
    $rf.scope = $Γ['global'];
    $rf.this = $Γ['global'];
    $rf['text'] = $lub(sec_lvl('$tmp55', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp54 = log($tmp55);
    $Γ['global']['$tmp54'] = $Λ.pop().l;
    $Γ['global']['$tmp54'] instanceof Object ? $Γ['global']['$tmp54'].Σ = $lub($Γ['global']['$tmp54'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp54'] = $lub($Γ['global']['$tmp54'], $Λ[$Λ.length - 1].l);
    i = 0;
    $Γ['global']['i'] = 0;
    $Γ['global']['i'] instanceof Object ? $Γ['global']['i'].Σ = $lub($Γ['global']['i'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['i'] = $lub($Γ['global']['i'], $Λ[$Λ.length - 1].l);
    $tmp58 = i;
    $Γ['global']['$tmp58'] = sec_lvl('i', null, false, $Γ['global']);
    $Γ['global']['$tmp58'] instanceof Object ? $Γ['global']['$tmp58'].Σ = $lub($Γ['global']['$tmp58'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp58'] = $lub($Γ['global']['$tmp58'], $Λ[$Λ.length - 1].l);
    $tmp61 = t.length;
    $Γ['global']['$tmp61'] = sec_lvl('t', 'length', false, $Γ['global']);
    $Γ['global']['$tmp61'] instanceof Object ? $Γ['global']['$tmp61'].Σ = $lub($Γ['global']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp61'] = $lub($Γ['global']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp60 = i < $tmp61;
    $Γ['global']['$tmp60'] = $lub(sec_lvl('i', null, true, $Γ['global']), sec_lvl('$tmp61', null, true, $Γ['global']));
    $Γ['global']['$tmp60'] instanceof Object ? $Γ['global']['$tmp60'].Σ = $lub($Γ['global']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp60'] = $lub($Γ['global']['$tmp60'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp60', null, true, $Γ['global'])),
        id: 'LOOP'
    });
    for (; $tmp60;) {
        var $tmp67, $tmp68, $tmp69, $tmp70, $tmp71, $tmp72, $tmp73, $tmp59, $tmp60, $tmp74;
        $Γ['global']['$tmp74'] = $Γ['global']['$tmp60'] = $Γ['global']['$tmp59'] = $Γ['global']['$tmp73'] = $Γ['global']['$tmp72'] = $Γ['global']['$tmp71'] = $Γ['global']['$tmp70'] = $Γ['global']['$tmp69'] = $Γ['global']['$tmp68'] = $Γ['global']['$tmp67'] = 0;
        $tmp70 = t[i];
        $Γ['global']['$tmp70'] = sec_lvl('t', i, false, $Γ['global']);
        $Γ['global']['$tmp70'] instanceof Object ? $Γ['global']['$tmp70'].Σ = $lub($Γ['global']['$tmp70'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp70'] = $lub($Γ['global']['$tmp70'], $Λ[$Λ.length - 1].l);
        $tmp69 = $tmp70 + ':';
        $Γ['global']['$tmp69'] = $lub(sec_lvl('$tmp70', null, true, $Γ['global']), 0);
        $Γ['global']['$tmp69'] instanceof Object ? $Γ['global']['$tmp69'].Σ = $lub($Γ['global']['$tmp69'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp69'] = $lub($Γ['global']['$tmp69'], $Λ[$Λ.length - 1].l);
        $tmp73 = t[i];
        $Γ['global']['$tmp73'] = sec_lvl('t', i, false, $Γ['global']);
        $Γ['global']['$tmp73'] instanceof Object ? $Γ['global']['$tmp73'].Σ = $lub($Γ['global']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp73'] = $lub($Γ['global']['$tmp73'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'hamming', false)['hamming'];
        $rf.scope = $Γ['global'];
        $rf.this = $Γ['global'];
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
        $rf.this = $Γ['global'];
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
        $rf = $scope($Γ['global'], 'log', false)['log'];
        $rf.scope = $Γ['global'];
        $rf.this = $Γ['global'];
        $rf['text'] = $lub(sec_lvl('$tmp68', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp67 = log($tmp68);
        $Γ['global']['$tmp67'] = $Λ.pop().l;
        $Γ['global']['$tmp67'] instanceof Object ? $Γ['global']['$tmp67'].Σ = $lub($Γ['global']['$tmp67'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp67'] = $lub($Γ['global']['$tmp67'], $Λ[$Λ.length - 1].l);
        $tmp59 = i++;
        $Γ['global']['$tmp59'] = sec_lvl('i', null, false, $Γ['global']);
        $Γ['global']['$tmp59'] instanceof Object ? $Γ['global']['$tmp59'].Σ = $lub($Γ['global']['$tmp59'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp59'] = $lub($Γ['global']['$tmp59'], $Λ[$Λ.length - 1].l);
        $tmp74 = t.length;
        $Γ['global']['$tmp74'] = sec_lvl('t', 'length', false, $Γ['global']);
        $Γ['global']['$tmp74'] instanceof Object ? $Γ['global']['$tmp74'].Σ = $lub($Γ['global']['$tmp74'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp74'] = $lub($Γ['global']['$tmp74'], $Λ[$Λ.length - 1].l);
        $tmp60 = i < $tmp74;
        $Γ['global']['$tmp60'] = $lub(sec_lvl('i', null, true, $Γ['global']), sec_lvl('$tmp74', null, true, $Γ['global']));
        $Γ['global']['$tmp60'] instanceof Object ? $Γ['global']['$tmp60'].Σ = $lub($Γ['global']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp60'] = $lub($Γ['global']['$tmp60'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        '$tmp72',
        '$tmp71',
        '$tmp67'
    ], $Λ[$Λ.length - 1].l, $Γ['global']);
    $Λ.pop();
    end = new Date();
    $tmp66 = end - start;
    $Γ['global']['$tmp66'] = $lub(sec_lvl('end', null, true, $Γ['global']), sec_lvl('start', null, true, $Γ['global']));
    $Γ['global']['$tmp66'] instanceof Object ? $Γ['global']['$tmp66'].Σ = $lub($Γ['global']['$tmp66'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp66'] = $lub($Γ['global']['$tmp66'], $Λ[$Λ.length - 1].l);
    $tmp65 = $tmp66 / 1000;
    $Γ['global']['$tmp65'] = $lub(sec_lvl('$tmp66', null, true, $Γ['global']), 0);
    $Γ['global']['$tmp65'] instanceof Object ? $Γ['global']['$tmp65'].Σ = $lub($Γ['global']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp65'] = $lub($Γ['global']['$tmp65'], $Λ[$Λ.length - 1].l);
    $tmp64 = 'Elapsed time:' + $tmp65;
    $Γ['global']['$tmp64'] = $lub(0, sec_lvl('$tmp65', null, true, $Γ['global']));
    $Γ['global']['$tmp64'] instanceof Object ? $Γ['global']['$tmp64'].Σ = $lub($Γ['global']['$tmp64'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp64'] = $lub($Γ['global']['$tmp64'], $Λ[$Λ.length - 1].l);
    $tmp63 = $tmp64 + ' seconds';
    $Γ['global']['$tmp63'] = $lub(sec_lvl('$tmp64', null, true, $Γ['global']), 0);
    $Γ['global']['$tmp63'] instanceof Object ? $Γ['global']['$tmp63'].Σ = $lub($Γ['global']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp63'] = $lub($Γ['global']['$tmp63'], $Λ[$Λ.length - 1].l);
    $rf = $scope($Γ['global'], 'log', false)['log'];
    $rf.scope = $Γ['global'];
    $rf.this = $Γ['global'];
    $rf['text'] = $lub(sec_lvl('$tmp63', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp62 = log($tmp63);
    $Γ['global']['$tmp62'] = $Λ.pop().l;
    $Γ['global']['$tmp62'] instanceof Object ? $Γ['global']['$tmp62'].Σ = $lub($Γ['global']['$tmp62'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp62'] = $lub($Γ['global']['$tmp62'], $Λ[$Λ.length - 1].l);
    $tmp1 = nprimes++;
    $Γ['global']['$tmp1'] = sec_lvl('nprimes', null, false, $Γ['global']);
    $Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
    $tmp2 = nprimes <= 4;
    $Γ['global']['$tmp2'] = $lub(sec_lvl('nprimes', null, true, $Γ['global']), 0);
    $Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
}
$upgrade([
    'Date',
    'start',
    '$tmp54',
    '$tmp72',
    '$tmp71',
    '$tmp67',
    'end',
    '$tmp62'
], $Λ[$Λ.length - 1].l, $Γ['global']);
$Λ.pop();
