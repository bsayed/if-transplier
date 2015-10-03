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
    do {
        if ($$cs.hasOwnProperty($var))
            return $$cs;
    } while ($$cs = $$cs.$scope);

    if (isLHS) {
        $Γ['global'][$var] = 0;
        return $Γ['global'][$var];
    } else
        throw new Error("Can't find variable " + $var + " in scope chain!!");
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
    if (prop) {
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


function qsort(arr) {
    var stack, sorted, $tmp0, $tmp1;
    $Γ['global']['qsort']['$tmp1'] = $Γ['global']['qsort']['$tmp0'] = $Γ['global']['qsort']['sorted'] = $Γ['global']['qsort']['stack'] = 0;
    stack = [arr];
    $scope($Γ['global']['qsort'], 'stack', true)['stack'] = $lub(sec_lvl('arr', null, false, $Γ['global']['qsort']));
    $scope($Γ['global']['qsort'], 'stack', true)['stack'] instanceof Object ? $scope($Γ['global']['qsort'], 'stack', true)['stack'].Σ = $lub($scope($Γ['global']['qsort'], 'stack', true)['stack'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'stack', true)['stack'] = $lub($scope($Γ['global']['qsort'], 'stack', true)['stack'], $pc().l);
    $Γ['global']['qsort']['stack'] = {
        __proto__: null,
        0: $lub($pc().l, sec_lvl('arr', null, false, $Γ['global']['qsort']['stack'])),
        Σ: $lub(sec_lvl('arr', null, false, $Γ['global']['qsort']['stack']), $pc().l)
    };
    sorted = [];
    $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] = 0;
    $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] instanceof Object ? $scope($Γ['global']['qsort'], 'sorted', true)['sorted'].Σ = $lub($scope($Γ['global']['qsort'], 'sorted', true)['sorted'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] = $lub($scope($Γ['global']['qsort'], 'sorted', true)['sorted'], $pc().l);
    $Γ['global']['qsort']['sorted'] = {
        __proto__: null,
        Σ: $lub($pc().l)
    };
    $tmp0 = stack.length;
    $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = sec_lvl('stack', 'length', false, $Γ['global']['qsort']);
    $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'], $pc().l);
    $Λ.push({
        l: $lub($pc().l, sec_lvl('$tmp0', null, true, $Γ['global']['qsort'])),
        id: 'LOOP'
    });
    while ($tmp0) {
        var temp, tl, $tmp2, pivot, left, i, $tmp4, $tmp5, $tmp6, $tmp7, $tmp0;
        $Γ['global']['qsort']['$tmp0'] = $Γ['global']['qsort']['$tmp7'] = $Γ['global']['qsort']['$tmp6'] = $Γ['global']['qsort']['$tmp5'] = $Γ['global']['qsort']['$tmp4'] = $Γ['global']['qsort']['i'] = $Γ['global']['qsort']['left'] = $Γ['global']['qsort']['pivot'] = $Γ['global']['qsort']['$tmp2'] = $Γ['global']['qsort']['tl'] = $Γ['global']['qsort']['temp'] = 0;
        temp = stack.pop();
        tl = temp.length;
        $scope($Γ['global']['qsort'], 'tl', true)['tl'] = sec_lvl('temp', 'length', false, $Γ['global']['qsort']);
        $scope($Γ['global']['qsort'], 'tl', true)['tl'] instanceof Object ? $scope($Γ['global']['qsort'], 'tl', true)['tl'].Σ = $lub($scope($Γ['global']['qsort'], 'tl', true)['tl'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'tl', true)['tl'] = $lub($scope($Γ['global']['qsort'], 'tl', true)['tl'], $pc().l);
        $tmp2 = tl == 1;
        $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] = $lub(sec_lvl('tl', null, true, $Γ['global']['qsort']), 0);
        $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] = $lub($scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'], $pc().l);
        $Λ.push({
            l: $lub($pc().l, sec_lvl('$tmp2', null, true, $Γ['global']['qsort'])),
            id: 'IF'
        });
        if ($tmp2) {
            var $tmp8, $tmp9, $tmp0;
            $Γ['global']['qsort']['$tmp0'] = $Γ['global']['qsort']['$tmp9'] = $Γ['global']['qsort']['$tmp8'] = 0;
            $tmp9 = temp[0];
            $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] = sec_lvl('temp', 0, false, $Γ['global']['qsort']);
            $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] = $lub($scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'], $pc().l);
            $tmp8 = sorted.push($tmp9);
            $tmp0 = stack.length;
            $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = sec_lvl('stack', 'length', false, $Γ['global']['qsort']);
            $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'], $pc().l);
            continue;
            var $shouldComp = { 'lbl': 'LOOP' };
        } else {
            $upgrade([
                'sorted.push',
                '$tmp8'
            ], $pc().l, $Γ['global']['qsort']);
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $pc().l);
        $Λ.pop();
        pivot = temp[0];
        $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] = sec_lvl('temp', 0, false, $Γ['global']['qsort']);
        $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] instanceof Object ? $scope($Γ['global']['qsort'], 'pivot', true)['pivot'].Σ = $lub($scope($Γ['global']['qsort'], 'pivot', true)['pivot'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] = $lub($scope($Γ['global']['qsort'], 'pivot', true)['pivot'], $pc().l);
        left = [];
        $scope($Γ['global']['qsort'], 'left', true)['left'] = 0;
        $scope($Γ['global']['qsort'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['qsort'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['qsort'], 'left', true)['left'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'left', true)['left'] = $lub($scope($Γ['global']['qsort'], 'left', true)['left'], $pc().l);
        $Γ['global']['qsort']['left'] = {
            __proto__: null,
            Σ: $lub($pc().l)
        };
        right = [];
        $scope($Γ['global']['qsort'], 'right', true)['right'] = 0;
        $scope($Γ['global']['qsort'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['qsort'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['qsort'], 'right', true)['right'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'right', true)['right'] = $lub($scope($Γ['global']['qsort'], 'right', true)['right'], $pc().l);
        $Γ['global']['qsort']['right'] = {
            __proto__: null,
            Σ: $lub($pc().l)
        };
        i = 1;
        $scope($Γ['global']['qsort'], 'i', true)['i'] = 0;
        $scope($Γ['global']['qsort'], 'i', true)['i'] instanceof Object ? $scope($Γ['global']['qsort'], 'i', true)['i'].Σ = $lub($scope($Γ['global']['qsort'], 'i', true)['i'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'i', true)['i'] = $lub($scope($Γ['global']['qsort'], 'i', true)['i'], $pc().l);
        $tmp4 = i < tl;
        $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub(sec_lvl('i', null, true, $Γ['global']['qsort']), sec_lvl('tl', null, true, $Γ['global']['qsort']));
        $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'], $pc().l);
        $Λ.push({
            l: $lub($pc().l, sec_lvl('$tmp4', null, true, $Γ['global']['qsort'])),
            id: 'LOOP'
        });
        for (; $tmp4;) {
            var $tmp10, $tmp11, $tmp3, $tmp4;
            $Γ['global']['qsort']['$tmp4'] = $Γ['global']['qsort']['$tmp3'] = $Γ['global']['qsort']['$tmp11'] = $Γ['global']['qsort']['$tmp10'] = 0;
            $tmp11 = temp[i];
            $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] = sec_lvl('temp', i, false, $Γ['global']['qsort']);
            $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] = $lub($scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'], $pc().l);
            $tmp10 = $tmp11 < pivot;
            $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] = $lub(sec_lvl('$tmp11', null, true, $Γ['global']['qsort']), sec_lvl('pivot', null, true, $Γ['global']['qsort']));
            $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] = $lub($scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'], $pc().l);
            $Λ.push({
                l: $lub($pc().l, sec_lvl('$tmp10', null, true, $Γ['global']['qsort'])),
                id: 'IF'
            });
            if ($tmp10) {
                $upgrade([
                    'right.push',
                    '$tmp14'
                ], $pc().l, $Γ['global']['qsort']);
                var $tmp12, $tmp13;
                $Γ['global']['qsort']['$tmp13'] = $Γ['global']['qsort']['$tmp12'] = 0;
                $tmp13 = temp[i];
                $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] = sec_lvl('temp', i, false, $Γ['global']['qsort']);
                $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] = $lub($scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'], $pc().l);
                $tmp12 = left.push($tmp13);
            } else {
                $upgrade([
                    'left.push',
                    '$tmp12'
                ], $pc().l, $Γ['global']['qsort']);
                var $tmp14, $tmp15;
                $Γ['global']['qsort']['$tmp15'] = $Γ['global']['qsort']['$tmp14'] = 0;
                $tmp15 = temp[i];
                $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] = sec_lvl('temp', i, false, $Γ['global']['qsort']);
                $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] = $lub($scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'], $pc().l);
                $tmp14 = right.push($tmp15);
            }
            $Λ.pop();
            $tmp3 = i++;
            $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] = sec_lvl('i', null, false, $Γ['global']['qsort']);
            $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] = $lub($scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'], $pc().l);
            $tmp4 = i < tl;
            $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub(sec_lvl('i', null, true, $Γ['global']['qsort']), sec_lvl('tl', null, true, $Γ['global']['qsort']));
            $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'], $pc().l);
        }
        $upgrade([
            'left.push',
            '$tmp12',
            'right.push',
            '$tmp14'
        ], $pc().l, $Γ['global']['qsort']);
        $Λ.pop();
        $tmp5 = left.push(pivot);
        $tmp6 = right.length;
        $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] = sec_lvl('right', 'length', false, $Γ['global']['qsort']);
        $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] = $lub($scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'], $pc().l);
        $Λ.push({
            l: $lub($pc().l, sec_lvl('$tmp6', null, true, $Γ['global']['qsort'])),
            id: 'IF'
        });
        if ($tmp6) {
            var $tmp16;
            $Γ['global']['qsort']['$tmp16'] = 0;
            $tmp16 = stack.push(right);
        } else {
            $upgrade([
                'stack.push',
                '$tmp16'
            ], $pc().l, $Γ['global']['qsort']);
        }
        $Λ.pop();
        $tmp7 = left.length;
        $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] = sec_lvl('left', 'length', false, $Γ['global']['qsort']);
        $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] = $lub($scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'], $pc().l);
        $Λ.push({
            l: $lub($pc().l, sec_lvl('$tmp7', null, true, $Γ['global']['qsort'])),
            id: 'IF'
        });
        if ($tmp7) {
            var $tmp17;
            $Γ['global']['qsort']['$tmp17'] = 0;
            $tmp17 = stack.push(left);
        } else {
            $upgrade([
                'stack.push',
                '$tmp17'
            ], $pc().l, $Γ['global']['qsort']);
        }
        $Λ.pop();
        $tmp0 = stack.length;
        $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = sec_lvl('stack', 'length', false, $Γ['global']['qsort']);
        $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'], $pc().l);
    }
    $upgrade([
        'stack.pop',
        'temp',
        'sorted.push',
        '$tmp8',
        'left.push',
        '$tmp12',
        'right.push',
        '$tmp14',
        '$tmp5',
        'stack.push',
        '$tmp16',
        '$tmp17'
    ], $pc().l, $Γ['global']['qsort']);
    $Λ.pop();
    $tmp1 = console.log(sorted);
}
$Γ['global']['qsort'] = {
    $fscope: $pc().l,
    prototype: { Σ: $pc().l },
    Σ: $pc().l,
    arr: $pc().l
};
$Γ['global']['qsort'] = {
    $fscope: $pc().l,
    prototype: { Σ: $pc().l },
    Σ: $pc().l,
    arr: $pc().l
};
$Γ['global']['qsort'] = {
    $fscope: $pc().l,
    prototype: {Σ: $pc().l},
    Σ: $pc().l,
    arr: $pc().l
};


//function qsort(arr) {
//    var stack, sorted, $tmp0, $tmp1;
//    $Γ['global']['qsort']['$tmp1'] = $Γ['global']['qsort']['$tmp0'] = $Γ['global']['qsort']['sorted'] = $Γ['global']['qsort']['stack'] = 0;
//    stack = [arr];
//    $scope($Γ['global']['qsort'], 'stack', true)['stack'] = $lub(sec_lvl('arr', null, false, $Γ['global']['qsort']));
//    $scope($Γ['global']['qsort'], 'stack', true)['stack'] instanceof Object ? $scope($Γ['global']['qsort'], 'stack', true)['stack'].Σ = $lub($scope($Γ['global']['qsort'], 'stack', true)['stack'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'stack', true)['stack'] = $lub($scope($Γ['global']['qsort'], 'stack', true)['stack'], $pc().l);
//    $Γ['global']['qsort']['stack'] = {
//        __proto__: null,
//        0: $lub($pc().l, sec_lvl('arr', null, false, $Γ['global']['qsort']['stack'])),
//        Σ: $lub(sec_lvl('arr', null, false, $Γ['global']['qsort']['stack']), $pc().l)
//    };
//    sorted = [];
//    $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] = 0;
//    $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] instanceof Object ? $scope($Γ['global']['qsort'], 'sorted', true)['sorted'].Σ = $lub($scope($Γ['global']['qsort'], 'sorted', true)['sorted'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'sorted', true)['sorted'] = $lub($scope($Γ['global']['qsort'], 'sorted', true)['sorted'], $pc().l);
//    $Γ['global']['qsort']['sorted'] = {
//        __proto__: null,
//        Σ: $lub($pc().l)
//    };
//    $tmp0 = stack.length;
//    console.log(stack)
//    $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = sec_lvl('stack', 'length', false, $Γ['global']['qsort']);
//    $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'], $pc().l);
//    $Λ.push({
//        l: $lub($pc().l, sec_lvl('$tmp0', null, true, $Γ['global']['qsort'])),
//        id: 'LOOP'
//    });
//    while ($tmp0) {
//        var temp, tl, $tmp2, pivot, left, i, $tmp4, $tmp5, $tmp6, $tmp7, $tmp0;
//        $Γ['global']['qsort']['$tmp0'] = $Γ['global']['qsort']['$tmp7'] = $Γ['global']['qsort']['$tmp6'] = $Γ['global']['qsort']['$tmp5'] = $Γ['global']['qsort']['$tmp4'] = $Γ['global']['qsort']['i'] = $Γ['global']['qsort']['left'] = $Γ['global']['qsort']['pivot'] = $Γ['global']['qsort']['$tmp2'] = $Γ['global']['qsort']['tl'] = $Γ['global']['qsort']['temp'] = 0;
//        temp = stack.pop();
//        tl = temp.length;
//        $scope($Γ['global']['qsort'], 'tl', true)['tl'] = sec_lvl('temp', 'length', false, $Γ['global']['qsort']);
//        $scope($Γ['global']['qsort'], 'tl', true)['tl'] instanceof Object ? $scope($Γ['global']['qsort'], 'tl', true)['tl'].Σ = $lub($scope($Γ['global']['qsort'], 'tl', true)['tl'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'tl', true)['tl'] = $lub($scope($Γ['global']['qsort'], 'tl', true)['tl'], $pc().l);
//        $tmp2 = tl == 1;
//        $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] = $lub(sec_lvl('tl', null, true, $Γ['global']['qsort']), 0);
//        $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'] = $lub($scope($Γ['global']['qsort'], '$tmp2', true)['$tmp2'], $pc().l);
//        $Λ.push({
//            l: $lub($pc().l, sec_lvl('$tmp2', null, true, $Γ['global']['qsort'])),
//            id: 'IF'
//        });
//        if ($tmp2) {
//            var $tmp8, $tmp9;
//            $Γ['global']['qsort']['$tmp9'] = $Γ['global']['qsort']['$tmp8'] = 0;
//            $tmp9 = temp[0];
//            $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] = sec_lvl('temp', '0', false, $Γ['global']['qsort']);
//            $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'] = $lub($scope($Γ['global']['qsort'], '$tmp9', true)['$tmp9'], $pc().l);
//            $tmp8 = sorted.push($tmp9);
//            continue;
//            var $shouldComp = { 'lbl': 'LOOP' };
//        } else {
//            $upgrade([
//                'sorted.push',
//                '$tmp8'
//            ], $pc().l, $Γ['global']['qsort']);
//        }
//        $Λ.pop();
//        pivot = temp[0];
//        $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] = sec_lvl('temp', '0', false, $Γ['global']['qsort']);
//        $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] instanceof Object ? $scope($Γ['global']['qsort'], 'pivot', true)['pivot'].Σ = $lub($scope($Γ['global']['qsort'], 'pivot', true)['pivot'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'pivot', true)['pivot'] = $lub($scope($Γ['global']['qsort'], 'pivot', true)['pivot'], $pc().l);
//        left = [];
//        $scope($Γ['global']['qsort'], 'left', true)['left'] = 0;
//        $scope($Γ['global']['qsort'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['qsort'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['qsort'], 'left', true)['left'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'left', true)['left'] = $lub($scope($Γ['global']['qsort'], 'left', true)['left'], $pc().l);
//        $Γ['global']['qsort']['left'] = {
//            __proto__: null,
//            Σ: $lub($pc().l)
//        };
//        right = [];
//        $scope($Γ['global']['qsort'], 'right', true)['right'] = 0;
//        $scope($Γ['global']['qsort'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['qsort'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['qsort'], 'right', true)['right'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'right', true)['right'] = $lub($scope($Γ['global']['qsort'], 'right', true)['right'], $pc().l);
//        $Γ['global']['qsort']['right'] = {
//            __proto__: null,
//            Σ: $lub($pc().l)
//        };
//        i = 1;
//        $scope($Γ['global']['qsort'], 'i', true)['i'] = 0;
//        $scope($Γ['global']['qsort'], 'i', true)['i'] instanceof Object ? $scope($Γ['global']['qsort'], 'i', true)['i'].Σ = $lub($scope($Γ['global']['qsort'], 'i', true)['i'].Σ, $pc().l) : $scope($Γ['global']['qsort'], 'i', true)['i'] = $lub($scope($Γ['global']['qsort'], 'i', true)['i'], $pc().l);
//        $tmp4 = i < tl;
//        $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub(sec_lvl('i', null, true, $Γ['global']['qsort']), sec_lvl('tl', null, true, $Γ['global']['qsort']));
//        $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'], $pc().l);
//        $Λ.push({
//            l: $lub($pc().l, sec_lvl('$tmp4', null, true, $Γ['global']['qsort'])),
//            id: 'LOOP'
//        });
//        for (; $tmp4;) {
//            var $tmp10, $tmp11, $tmp3, $tmp4;
//            $Γ['global']['qsort']['$tmp4'] = $Γ['global']['qsort']['$tmp3'] = $Γ['global']['qsort']['$tmp11'] = $Γ['global']['qsort']['$tmp10'] = 0;
//            $tmp11 = temp[i];
//            $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] = sec_lvl('temp', 'i', false, $Γ['global']['qsort']);
//            $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'] = $lub($scope($Γ['global']['qsort'], '$tmp11', true)['$tmp11'], $pc().l);
//            $tmp10 = $tmp11 < pivot;
//            $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] = $lub(sec_lvl('$tmp11', null, true, $Γ['global']['qsort']), sec_lvl('pivot', null, true, $Γ['global']['qsort']));
//            $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'] = $lub($scope($Γ['global']['qsort'], '$tmp10', true)['$tmp10'], $pc().l);
//            $Λ.push({
//                l: $lub($pc().l, sec_lvl('$tmp10', null, true, $Γ['global']['qsort'])),
//                id: 'IF'
//            });
//            if ($tmp10) {
//                $upgrade([
//                    'right.push',
//                    '$tmp14'
//                ], $pc().l, $Γ['global']['qsort']);
//                var $tmp12, $tmp13;
//                $Γ['global']['qsort']['$tmp13'] = $Γ['global']['qsort']['$tmp12'] = 0;
//                $tmp13 = temp[i];
//                $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] = sec_lvl('temp', 'i', false, $Γ['global']['qsort']);
//                $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'] = $lub($scope($Γ['global']['qsort'], '$tmp13', true)['$tmp13'], $pc().l);
//                $tmp12 = left.push($tmp13);
//            } else {
//                $upgrade([
//                    'left.push',
//                    '$tmp12'
//                ], $pc().l, $Γ['global']['qsort']);
//                var $tmp14, $tmp15;
//                $Γ['global']['qsort']['$tmp15'] = $Γ['global']['qsort']['$tmp14'] = 0;
//                $tmp15 = temp[i];
//                $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] = sec_lvl('temp', 'i', false, $Γ['global']['qsort']);
//                $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'] = $lub($scope($Γ['global']['qsort'], '$tmp15', true)['$tmp15'], $pc().l);
//                $tmp14 = right.push($tmp15);
//            }
//            $Λ.pop();
//            $tmp3 = i++;
//            $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] = sec_lvl('i', null, false, $Γ['global']['qsort']);
//            $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'] = $lub($scope($Γ['global']['qsort'], '$tmp3', true)['$tmp3'], $pc().l);
//            $tmp4 = i < tl;
//            $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub(sec_lvl('i', null, true, $Γ['global']['qsort']), sec_lvl('tl', null, true, $Γ['global']['qsort']));
//            $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'] = $lub($scope($Γ['global']['qsort'], '$tmp4', true)['$tmp4'], $pc().l);
//        }
//        $upgrade([
//            'left.push',
//            '$tmp12',
//            'right.push',
//            '$tmp14'
//        ], $pc().l, $Γ['global']['qsort']);
//        $Λ.pop();
//        $tmp5 = left.push(pivot);
//        $tmp6 = right.length;
//        $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] = sec_lvl('right', 'length', false, $Γ['global']['qsort']);
//        $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'] = $lub($scope($Γ['global']['qsort'], '$tmp6', true)['$tmp6'], $pc().l);
//        $Λ.push({
//            l: $lub($pc().l, sec_lvl('$tmp6', null, true, $Γ['global']['qsort'])),
//            id: 'IF'
//        });
//        if ($tmp6) {
//            var $tmp16;
//            $Γ['global']['qsort']['$tmp16'] = 0;
//            $tmp16 = stack.push(right);
//        } else {
//            $upgrade([
//                'stack.push',
//                '$tmp16'
//            ], $pc().l, $Γ['global']['qsort']);
//        }
//        $Λ.pop();
//        $tmp7 = left.length;
//        $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] = sec_lvl('left', 'length', false, $Γ['global']['qsort']);
//        $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'] = $lub($scope($Γ['global']['qsort'], '$tmp7', true)['$tmp7'], $pc().l);
//        $Λ.push({
//            l: $lub($pc().l, sec_lvl('$tmp7', null, true, $Γ['global']['qsort'])),
//            id: 'IF'
//        });
//        if ($tmp7) {
//            var $tmp17;
//            $Γ['global']['qsort']['$tmp17'] = 0;
//            $tmp17 = stack.push(left);
//        } else {
//            $upgrade([
//                'stack.push',
//                '$tmp17'
//            ], $pc().l, $Γ['global']['qsort']);
//        }
//        $Λ.pop();
//        $tmp0 = stack.length;
//        console.log($tmp0);
//        $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = sec_lvl('stack', 'length', false, $Γ['global']['qsort']);
//        $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] instanceof Object ? $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'].Σ, $pc().l) : $scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'] = $lub($scope($Γ['global']['qsort'], '$tmp0', true)['$tmp0'], $pc().l);
//    }
//    $upgrade([
//        'stack.pop',
//        'temp',
//        'sorted.push',
//        '$tmp8',
//        'left.push',
//        '$tmp12',
//        'right.push',
//        '$tmp14',
//        '$tmp5',
//        'stack.push',
//        '$tmp16',
//        '$tmp17'
//    ], $pc().l, $Γ['global']['qsort']);
//    $Λ.pop();
//    $tmp1 = console.log(sorted);
//}
//$Γ['global']['qsort'] = {
//    $fscope: $pc().l,
//    prototype: { Σ: $pc().l },
//    Σ: $pc().l,
//    arr: $pc().l
//};


var a = [34, 203, 3];//, 746, 200, 984, 198, 764, 9];
qsort(a);
//console.log(a);
