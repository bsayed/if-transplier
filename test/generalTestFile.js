var $Γ = {'global': {'scope': null, 'Σ': 0}};

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
    var $$csCopy = $$cs;
    do {
        //if ($$cs.hasOwnProperty(""+$var))
        if ($$cs[$var] !== undefined)
            return $$cs;
    } while ($$cs = $$cs.scope);

    if (isLHS) {
        $Γ['global'][$var] = 0;
        return $Γ['global'][$var];
    } else {
        console.log($$csCopy);
        throw new Error("Can't find variable " + $var + " in scope chain: " + $$csCopy);
    }
}

function $prop(obj, prop, $$cs) {
    var $ro, $t;
    $ro = $t = $scope($$cs, obj, false)[obj];

    do {
        if ($ro[prop] !== undefined)
            return $ro[prop];
    } while ($ro = $ro['__proto__']);
    // if isFuncProb
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

var performance, kSplayTreeSize, kSplayTreeModifications, kSplayTreePayloadDepth, splayTree, splaySampleTimeStart, splaySamples, splaySumOfSquaredPauses, $tmp0, $tmp1, $tmp2;
$Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['splaySumOfSquaredPauses'] = $Γ['global']['splaySamples'] = $Γ['global']['splaySampleTimeStart'] = $Γ['global']['splayTree'] = $Γ['global']['kSplayTreePayloadDepth'] = $Γ['global']['kSplayTreeModifications'] = $Γ['global']['kSplayTreeSize'] = $Γ['global']['performance'] = 0;
performance = {};
$Γ['global']['performance'] = 0;
$Γ['global']['performance'] instanceof Object ? $Γ['global']['performance'].Σ = $lub($Γ['global']['performance'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['performance'] = $lub($Γ['global']['performance'], $Λ[$Λ.length - 1].l);
$Γ['global']['performance'] = {
    __proto__: {},
    Σ: $Λ[$Λ.length - 1].l
};
performance.now = Date.now;
$Γ['global']['performance']['now'] = {
    Σ: 0,
    prototype: { Σ: $Λ[$Λ.length - 1].l }
};
$Γ['global']['performance']['now'] instanceof Object ? $Γ['global']['performance']['now'].Σ = $lub($Γ['global']['performance']['now'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['performance']['now'] = $lub($Γ['global']['performance']['now'], $Λ[$Λ.length - 1].l);
kSplayTreeSize = 8000;
$Γ['global']['kSplayTreeSize'] = $Λ[$Λ.length - 1].l;
kSplayTreeModifications = 80;
$Γ['global']['kSplayTreeModifications'] = $Λ[$Λ.length - 1].l;
kSplayTreePayloadDepth = 5;
$Γ['global']['kSplayTreePayloadDepth'] = $Λ[$Λ.length - 1].l;
splayTree = null;
$Γ['global']['splayTree'] = $Λ[$Λ.length - 1].l;
splaySampleTimeStart = 0;
$Γ['global']['splaySampleTimeStart'] = $Λ[$Λ.length - 1].l;
function GeneratePayloadTree(depth, tag) {
    var $tmp3;
    $Γ['global']['GeneratePayloadTree']['$tmp3'] = 0;
    $tmp3 = depth == 0;
    $Γ['global']['GeneratePayloadTree']['$tmp3'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
    $Γ['global']['GeneratePayloadTree']['$tmp3'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp3'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp3'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp3'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp3'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp3', null, true, $Γ['global']['GeneratePayloadTree'])),
        id: 'IF'
    });
    if ($tmp3) {
        $upgrade([
            '$tmp9',
            '$tmp11'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['GeneratePayloadTree']);
        var $tmp4, $tmp5, $tmp6, $tmp7;
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = $Γ['global']['GeneratePayloadTree']['$tmp6'] = $Γ['global']['GeneratePayloadTree']['$tmp5'] = $Γ['global']['GeneratePayloadTree']['$tmp4'] = 0;
        $tmp5 = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp5'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp5'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp5'] = {
            __proto__: {},
            scope: $Γ['global']['GeneratePayloadTree'],
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
            Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
        };
        $tmp7 = 'String for key ' + tag;
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp7'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp7'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'], $Λ[$Λ.length - 1].l);
        $tmp6 = $tmp7 + ' in leaf node';
        $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub(sec_lvl('$tmp7', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp6'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp6'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'], $Λ[$Λ.length - 1].l);
        $tmp4 = {
            array: $tmp5,
            string: $tmp6
        };
        $Γ['global']['GeneratePayloadTree']['$tmp4'] = $lub(sec_lvl('$tmp5', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp6', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp4'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp4'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp4'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp4'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp4'] = {
            __proto__: {},
            array: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp5', null, true, $Γ['global']['GeneratePayloadTree']['$tmp4'])),
            string: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp6', null, true, $Γ['global']['GeneratePayloadTree']['$tmp4'])),
            Σ: $lub(sec_lvl('$tmp5', null, true, $Γ['global']['GeneratePayloadTree']['$tmp4']), sec_lvl('$tmp6', null, true, $Γ['global']['GeneratePayloadTree']['$tmp4']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp4')['$tmp4'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['GeneratePayloadTree'].InvokedAsContr) {
                $Γ['global']['GeneratePayloadTree'].this.Σ = $lub($Γ['global']['GeneratePayloadTree'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['GeneratePayloadTree'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp4;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp8, $tmp9, $tmp10, $tmp11, $tmp12;
        $Γ['global']['GeneratePayloadTree']['$tmp12'] = $Γ['global']['GeneratePayloadTree']['$tmp11'] = $Γ['global']['GeneratePayloadTree']['$tmp10'] = $Γ['global']['GeneratePayloadTree']['$tmp9'] = $Γ['global']['GeneratePayloadTree']['$tmp8'] = 0;
        $tmp10 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp10'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp10'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp10'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp10'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global']['GeneratePayloadTree'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp10', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp9 = GeneratePayloadTree($tmp10, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp9'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp9'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp9'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp9'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'], $Λ[$Λ.length - 1].l);
        $tmp12 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp12'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp12'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp12'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp12'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp12'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global']['GeneratePayloadTree'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp12', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp11 = GeneratePayloadTree($tmp12, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp11'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp11'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp11'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp11'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'], $Λ[$Λ.length - 1].l);
        $tmp8 = {
            left: $tmp9,
            right: $tmp11
        };
        $Γ['global']['GeneratePayloadTree']['$tmp8'] = $lub(sec_lvl('$tmp9', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp11', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp8'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp8'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp8'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp8'] = {
            __proto__: {},
            left: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp9', null, true, $Γ['global']['GeneratePayloadTree']['$tmp8'])),
            right: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp11', null, true, $Γ['global']['GeneratePayloadTree']['$tmp8'])),
            Σ: $lub(sec_lvl('$tmp9', null, true, $Γ['global']['GeneratePayloadTree']['$tmp8']), sec_lvl('$tmp11', null, true, $Γ['global']['GeneratePayloadTree']['$tmp8']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp8')['$tmp8'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['GeneratePayloadTree'].InvokedAsContr) {
                $Γ['global']['GeneratePayloadTree'].this.Σ = $lub($Γ['global']['GeneratePayloadTree'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['GeneratePayloadTree'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp8;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
}
$Γ['global']['GeneratePayloadTree'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    depth: $Λ[$Λ.length - 1].l,
    tag: $Λ[$Λ.length - 1].l
};
function GenerateKey() {
    var $tmp13;
    $Γ['global']['GenerateKey']['$tmp13'] = 0;
    $tmp13 = Math.random();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['GenerateKey'], '$tmp13')['$tmp13'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['GenerateKey'].InvokedAsContr) {
            $Γ['global']['GenerateKey'].this.Σ = $lub($Γ['global']['GenerateKey'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['GenerateKey'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp13;
}
$Γ['global']['GenerateKey'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
splaySamples = 0;
$Γ['global']['splaySamples'] = $Λ[$Λ.length - 1].l;
splaySumOfSquaredPauses = 0;
$Γ['global']['splaySumOfSquaredPauses'] = $Λ[$Λ.length - 1].l;
function SplayRMS() {
    var $tmp14, $tmp15, $tmp16, $tmp17;
    $Γ['global']['SplayRMS']['$tmp17'] = $Γ['global']['SplayRMS']['$tmp16'] = $Γ['global']['SplayRMS']['$tmp15'] = $Γ['global']['SplayRMS']['$tmp14'] = 0;
    $tmp17 = splaySumOfSquaredPauses / splaySamples;
    $Γ['global']['SplayRMS']['$tmp17'] = $lub(sec_lvl('splaySumOfSquaredPauses', null, true, $Γ['global']['SplayRMS']), sec_lvl('splaySamples', null, true, $Γ['global']['SplayRMS']));
    $Γ['global']['SplayRMS']['$tmp17'] instanceof Object ? $Γ['global']['SplayRMS']['$tmp17'].Σ = $lub($Γ['global']['SplayRMS']['$tmp17'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRMS']['$tmp17'] = $lub($Γ['global']['SplayRMS']['$tmp17'], $Λ[$Λ.length - 1].l);
    $tmp16 = Math.sqrt($tmp17);
    $tmp15 = $tmp16 * 10000;
    $Γ['global']['SplayRMS']['$tmp15'] = $lub(sec_lvl('$tmp16', null, true, $Γ['global']['SplayRMS']), $Λ[$Λ.length - 1].l);
    $Γ['global']['SplayRMS']['$tmp15'] instanceof Object ? $Γ['global']['SplayRMS']['$tmp15'].Σ = $lub($Γ['global']['SplayRMS']['$tmp15'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRMS']['$tmp15'] = $lub($Γ['global']['SplayRMS']['$tmp15'], $Λ[$Λ.length - 1].l);
    $tmp14 = Math.round($tmp15);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['SplayRMS'], '$tmp14')['$tmp14'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['SplayRMS'].InvokedAsContr) {
            $Γ['global']['SplayRMS'].this.Σ = $lub($Γ['global']['SplayRMS'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['SplayRMS'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp14;
}
$Γ['global']['SplayRMS'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
function SplayUpdateStats(time) {
    var pause, $tmp18;
    $Γ['global']['SplayUpdateStats']['$tmp18'] = $Γ['global']['SplayUpdateStats']['pause'] = 0;
    pause = time - splaySampleTimeStart;
    $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] = $lub(sec_lvl('time', null, true, $Γ['global']['SplayUpdateStats']), sec_lvl('splaySampleTimeStart', null, true, $Γ['global']['SplayUpdateStats']));
    $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'], $Λ[$Λ.length - 1].l);
    splaySampleTimeStart = time;
    $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] = sec_lvl('time', null, false, $Γ['global']['SplayUpdateStats']);
    $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'], $Λ[$Λ.length - 1].l);
    $tmp18 = splaySamples++;
    $Γ['global']['SplayUpdateStats']['$tmp18'] = sec_lvl('splaySamples', null, false, $Γ['global']['SplayUpdateStats']);
    $Γ['global']['SplayUpdateStats']['$tmp18'] instanceof Object ? $Γ['global']['SplayUpdateStats']['$tmp18'].Σ = $lub($Γ['global']['SplayUpdateStats']['$tmp18'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayUpdateStats']['$tmp18'] = $lub($Γ['global']['SplayUpdateStats']['$tmp18'], $Λ[$Λ.length - 1].l);
    splaySumOfSquaredPauses += pause * pause;
    $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] = $lub(sec_lvl('pause', null, true, $Γ['global']['SplayUpdateStats']), sec_lvl('pause', null, true, $Γ['global']['SplayUpdateStats']));
    $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'], $Λ[$Λ.length - 1].l);
}
$Γ['global']['SplayUpdateStats'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    time: $Λ[$Λ.length - 1].l
};
function InsertNewNode() {
    var key, $tmp19, $tmp20, payload, $tmp21, $tmp22;
    $Γ['global']['InsertNewNode']['$tmp22'] = $Γ['global']['InsertNewNode']['$tmp21'] = $Γ['global']['InsertNewNode']['payload'] = $Γ['global']['InsertNewNode']['$tmp20'] = $Γ['global']['InsertNewNode']['$tmp19'] = $Γ['global']['InsertNewNode']['key'] = 0;
    $tmp20 = splayTree.find(key);
    $tmp19 = $tmp20 != null;
    $Γ['global']['InsertNewNode']['$tmp19'] = $lub(sec_lvl('$tmp20', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
    $Γ['global']['InsertNewNode']['$tmp19'] instanceof Object ? $Γ['global']['InsertNewNode']['$tmp19'].Σ = $lub($Γ['global']['InsertNewNode']['$tmp19'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['InsertNewNode']['$tmp19'] = $lub($Γ['global']['InsertNewNode']['$tmp19'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp19', null, true, $Γ['global']['InsertNewNode'])),
        id: 'LOOP'
    });
    do {
        $rf = $scope($Γ['global']['InsertNewNode'], 'GenerateKey', false)['GenerateKey'];
        $rf.scope = $Γ['global']['InsertNewNode'];
        $rf.this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        key = GenerateKey();
        $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] = $Λ.pop().l;
        $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] instanceof Object ? $scope($Γ['global']['InsertNewNode'], 'key', true)['key'].Σ = $lub($scope($Γ['global']['InsertNewNode'], 'key', true)['key'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] = $lub($scope($Γ['global']['InsertNewNode'], 'key', true)['key'], $Λ[$Λ.length - 1].l);
        var $tmp19, $tmp23;
        $Γ['global']['InsertNewNode']['$tmp23'] = $Γ['global']['InsertNewNode']['$tmp19'] = 0;
        $tmp23 = splayTree.find(key);
        $tmp19 = $tmp23 != null;
        $Γ['global']['InsertNewNode']['$tmp19'] = $lub(sec_lvl('$tmp23', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
        $Γ['global']['InsertNewNode']['$tmp19'] instanceof Object ? $Γ['global']['InsertNewNode']['$tmp19'].Σ = $lub($Γ['global']['InsertNewNode']['$tmp19'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['InsertNewNode']['$tmp19'] = $lub($Γ['global']['InsertNewNode']['$tmp19'], $Λ[$Λ.length - 1].l);
    } while ($tmp19);
    $upgrade([
        'key',
        'splayTree.find',
        '$tmp23'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['InsertNewNode']);
    $Λ.pop();
    $tmp21 = String(key);
    $rf = $scope($Γ['global']['InsertNewNode'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
    $rf.scope = $Γ['global']['InsertNewNode'];
    $rf.this = $Γ['global'];
    $rf['depth'] = $lub(sec_lvl('kSplayTreePayloadDepth', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
    $rf['tag'] = $lub(sec_lvl('$tmp21', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    payload = GeneratePayloadTree(kSplayTreePayloadDepth, $tmp21);
    $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] = $Λ.pop().l;
    $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] instanceof Object ? $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'].Σ = $lub($scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] = $lub($scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'], $Λ[$Λ.length - 1].l);
    $tmp22 = splayTree.insert(key, payload);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['InsertNewNode'], 'key')['key'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['InsertNewNode'].InvokedAsContr) {
            $Γ['global']['InsertNewNode'].this.Σ = $lub($Γ['global']['InsertNewNode'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['InsertNewNode'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return key;
}
$Γ['global']['InsertNewNode'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
function SplaySetup() {
    var $tmp24, $tmp25, i, $tmp27;
    $Γ['global']['SplaySetup']['$tmp27'] = $Γ['global']['SplaySetup']['i'] = $Γ['global']['SplaySetup']['$tmp25'] = $Γ['global']['SplaySetup']['$tmp24'] = 0;
    $tmp25 = performance.now;
    $Γ['global']['SplaySetup']['$tmp25'] = sec_lvl('performance', 'now', false, $Γ['global']['SplaySetup']);
    $Γ['global']['SplaySetup']['$tmp25'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp25'].Σ = $lub($Γ['global']['SplaySetup']['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp25'] = $lub($Γ['global']['SplaySetup']['$tmp25'], $Λ[$Λ.length - 1].l);
    $tmp24 = !$tmp25;
    $Γ['global']['SplaySetup']['$tmp24'] = sec_lvl('$tmp25', null, false, $Γ['global']['SplaySetup']);
    $Γ['global']['SplaySetup']['$tmp24'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp24'].Σ = $lub($Γ['global']['SplaySetup']['$tmp24'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp24'] = $lub($Γ['global']['SplaySetup']['$tmp24'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp24', null, true, $Γ['global']['SplaySetup'])),
        id: 'IF'
    });
    if ($tmp24) {
        var $tmp28;
        $Γ['global']['SplaySetup']['$tmp28'] = 0;
        $tmp28 = 'PerformanceNowUnsupported';
        $Γ['global']['SplaySetup']['$tmp28'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.len - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp28', null, true, $Γ['global']['SplaySetup'])) };
        throw $tmp28;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $scope($Γ['global']['SplaySetup'], 'SplayTree', false)['SplayTree'];
    $rf.scope = $Γ['global']['SplaySetup'];
    $rf.this = $scope($Γ['global']['SplaySetup'], 'SplayTree', true)['SplayTree'] = {
        Σ: $Λ[$Λ.length - 1].l,
        __proto__: $rf.prototype
    };
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    splayTree = new SplayTree();
    $scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'] = $Λ.pop().l;
    $scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'] instanceof Object ? $scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'].Σ = $lub($scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'] = $lub($scope($Γ['global']['SplaySetup'], 'splayTree', true)['splayTree'], $Λ[$Λ.length - 1].l);
    splaySampleTimeStart = performance.now();
    i = 0;
    $scope($Γ['global']['SplaySetup'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp27 = i < kSplayTreeSize;
    $Γ['global']['SplaySetup']['$tmp27'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplaySetup']));
    $Γ['global']['SplaySetup']['$tmp27'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp27'].Σ = $lub($Γ['global']['SplaySetup']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp27'] = $lub($Γ['global']['SplaySetup']['$tmp27'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp27', null, true, $Γ['global']['SplaySetup'])),
        id: 'LOOP'
    });
    for (; $tmp27;) {
        var $tmp29, $tmp30, $tmp31, $tmp32, $tmp26, $tmp27;
        $Γ['global']['SplaySetup']['$tmp27'] = $Γ['global']['SplaySetup']['$tmp26'] = $Γ['global']['SplaySetup']['$tmp32'] = $Γ['global']['SplaySetup']['$tmp31'] = $Γ['global']['SplaySetup']['$tmp30'] = $Γ['global']['SplaySetup']['$tmp29'] = 0;
        $rf = $scope($Γ['global']['SplaySetup'], 'InsertNewNode', false)['InsertNewNode'];
        $rf.scope = $Γ['global']['SplaySetup'];
        $rf.this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp29 = InsertNewNode();
        $Γ['global']['SplaySetup']['$tmp29'] = $Λ.pop().l;
        $Γ['global']['SplaySetup']['$tmp29'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp29'].Σ = $lub($Γ['global']['SplaySetup']['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp29'] = $lub($Γ['global']['SplaySetup']['$tmp29'], $Λ[$Λ.length - 1].l);
        $tmp32 = i + 1;
        $Γ['global']['SplaySetup']['$tmp32'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp32'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp32'].Σ = $lub($Γ['global']['SplaySetup']['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp32'] = $lub($Γ['global']['SplaySetup']['$tmp32'], $Λ[$Λ.length - 1].l);
        $tmp31 = $tmp32 % 20;
        $Γ['global']['SplaySetup']['$tmp31'] = $lub(sec_lvl('$tmp32', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp31'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp31'].Σ = $lub($Γ['global']['SplaySetup']['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp31'] = $lub($Γ['global']['SplaySetup']['$tmp31'], $Λ[$Λ.length - 1].l);
        $tmp30 = $tmp31 == 19;
        $Γ['global']['SplaySetup']['$tmp30'] = $lub(sec_lvl('$tmp31', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp30'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp30'].Σ = $lub($Γ['global']['SplaySetup']['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp30'] = $lub($Γ['global']['SplaySetup']['$tmp30'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp30', null, true, $Γ['global']['SplaySetup'])),
            id: 'IF'
        });
        if ($tmp30) {
            var $tmp33, $tmp34;
            $Γ['global']['SplaySetup']['$tmp34'] = $Γ['global']['SplaySetup']['$tmp33'] = 0;
            $tmp34 = performance.now();
            $rf = $scope($Γ['global']['SplaySetup'], 'SplayUpdateStats', false)['SplayUpdateStats'];
            $rf.scope = $Γ['global']['SplaySetup'];
            $rf.this = $Γ['global'];
            $rf['time'] = $lub(sec_lvl('$tmp34', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp33 = SplayUpdateStats($tmp34);
            $Γ['global']['SplaySetup']['$tmp33'] = $Λ.pop().l;
            $Γ['global']['SplaySetup']['$tmp33'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp33'].Σ = $lub($Γ['global']['SplaySetup']['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp33'] = $lub($Γ['global']['SplaySetup']['$tmp33'], $Λ[$Λ.length - 1].l);
        } else {
            $upgrade([
                'performance.now',
                '$tmp34',
                '$tmp33'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplaySetup']);
        }
        $Λ.pop();
        $tmp26 = i++;
        $Γ['global']['SplaySetup']['$tmp26'] = sec_lvl('i', null, false, $Γ['global']['SplaySetup']);
        $Γ['global']['SplaySetup']['$tmp26'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp26'].Σ = $lub($Γ['global']['SplaySetup']['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp26'] = $lub($Γ['global']['SplaySetup']['$tmp26'], $Λ[$Λ.length - 1].l);
        $tmp27 = i < kSplayTreeSize;
        $Γ['global']['SplaySetup']['$tmp27'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplaySetup']));
        $Γ['global']['SplaySetup']['$tmp27'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp27'].Σ = $lub($Γ['global']['SplaySetup']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp27'] = $lub($Γ['global']['SplaySetup']['$tmp27'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        '$tmp29',
        'performance.now',
        '$tmp34',
        '$tmp33'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplaySetup']);
    $Λ.pop();
}
$Γ['global']['SplaySetup'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
function SplayTearDown() {
    var keys, length, $tmp35, i, $tmp37, $tmp38;
    $Γ['global']['SplayTearDown']['$tmp38'] = $Γ['global']['SplayTearDown']['$tmp37'] = $Γ['global']['SplayTearDown']['i'] = $Γ['global']['SplayTearDown']['$tmp35'] = $Γ['global']['SplayTearDown']['length'] = $Γ['global']['SplayTearDown']['keys'] = 0;
    keys = splayTree.exportKeys();
    splayTree = null;
    $scope($Γ['global']['SplayTearDown'], 'splayTree', true)['splayTree'] = $Λ[$Λ.length - 1].l;
    splaySamples = 0;
    $scope($Γ['global']['SplayTearDown'], 'splaySamples', true)['splaySamples'] = $Λ[$Λ.length - 1].l;
    splaySumOfSquaredPauses = 0;
    $scope($Γ['global']['SplayTearDown'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] = $Λ[$Λ.length - 1].l;
    length = keys.length;
    $scope($Γ['global']['SplayTearDown'], 'length', true)['length'] = sec_lvl('keys', 'length', false, $Γ['global']['SplayTearDown']);
    $scope($Γ['global']['SplayTearDown'], 'length', true)['length'] instanceof Object ? $scope($Γ['global']['SplayTearDown'], 'length', true)['length'].Σ = $lub($scope($Γ['global']['SplayTearDown'], 'length', true)['length'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayTearDown'], 'length', true)['length'] = $lub($scope($Γ['global']['SplayTearDown'], 'length', true)['length'], $Λ[$Λ.length - 1].l);
    $tmp35 = length != kSplayTreeSize;
    $Γ['global']['SplayTearDown']['$tmp35'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplayTearDown']));
    $Γ['global']['SplayTearDown']['$tmp35'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp35'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp35'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp35'] = $lub($Γ['global']['SplayTearDown']['$tmp35'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp35', null, true, $Γ['global']['SplayTearDown'])),
        id: 'IF'
    });
    if ($tmp35) {
        var $tmp39;
        $Γ['global']['SplayTearDown']['$tmp39'] = 0;
        $tmp39 = new Error('Splay tree has wrong size');
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.len - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp39', null, true, $Γ['global']['SplayTearDown'])) };
        throw $tmp39;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp39'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    i = 0;
    $scope($Γ['global']['SplayTearDown'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp38 = length - 1;
    $Γ['global']['SplayTearDown']['$tmp38'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
    $Γ['global']['SplayTearDown']['$tmp38'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp38'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp38'] = $lub($Γ['global']['SplayTearDown']['$tmp38'], $Λ[$Λ.length - 1].l);
    $tmp37 = i < $tmp38;
    $Γ['global']['SplayTearDown']['$tmp37'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp38', null, true, $Γ['global']['SplayTearDown']));
    $Γ['global']['SplayTearDown']['$tmp37'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp37'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp37'] = $lub($Γ['global']['SplayTearDown']['$tmp37'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp37', null, true, $Γ['global']['SplayTearDown'])),
        id: 'LOOP'
    });
    for (; $tmp37;) {
        var $tmp40, $tmp41, $tmp42, $tmp43, $tmp36, $tmp37, $tmp44;
        $Γ['global']['SplayTearDown']['$tmp44'] = $Γ['global']['SplayTearDown']['$tmp37'] = $Γ['global']['SplayTearDown']['$tmp36'] = $Γ['global']['SplayTearDown']['$tmp43'] = $Γ['global']['SplayTearDown']['$tmp42'] = $Γ['global']['SplayTearDown']['$tmp41'] = $Γ['global']['SplayTearDown']['$tmp40'] = 0;
        $tmp41 = keys[i];
        $Γ['global']['SplayTearDown']['$tmp41'] = sec_lvl('keys', i, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp41'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp41'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp41'] = $lub($Γ['global']['SplayTearDown']['$tmp41'], $Λ[$Λ.length - 1].l);
        $tmp43 = i + 1;
        $Γ['global']['SplayTearDown']['$tmp43'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayTearDown']['$tmp43'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp43'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp43'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp43'] = $lub($Γ['global']['SplayTearDown']['$tmp43'], $Λ[$Λ.length - 1].l);
        $tmp42 = keys[$tmp43];
        $Γ['global']['SplayTearDown']['$tmp42'] = sec_lvl('keys', $tmp43, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp42'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp42'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp42'] = $lub($Γ['global']['SplayTearDown']['$tmp42'], $Λ[$Λ.length - 1].l);
        $tmp40 = $tmp41 >= $tmp42;
        $Γ['global']['SplayTearDown']['$tmp40'] = $lub(sec_lvl('$tmp41', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp42', null, true, $Γ['global']['SplayTearDown']));
        $Γ['global']['SplayTearDown']['$tmp40'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp40'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp40'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp40'] = $lub($Γ['global']['SplayTearDown']['$tmp40'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp40', null, true, $Γ['global']['SplayTearDown'])),
            id: 'IF'
        });
        if ($tmp40) {
            var $tmp45;
            $Γ['global']['SplayTearDown']['$tmp45'] = 0;
            $tmp45 = new Error('Splay tree not sorted');
            $old_pc = $pc();
            while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
                $Λ.pop();
            }
            $Λ[$Λ.len - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp45', null, true, $Γ['global']['SplayTearDown'])) };
            throw $tmp45;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
            $upgrade([
                'Error',
                '$tmp45'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
        $tmp36 = i++;
        $Γ['global']['SplayTearDown']['$tmp36'] = sec_lvl('i', null, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp36'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp36'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp36'] = $lub($Γ['global']['SplayTearDown']['$tmp36'], $Λ[$Λ.length - 1].l);
        $tmp44 = length - 1;
        $Γ['global']['SplayTearDown']['$tmp44'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayTearDown']['$tmp44'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp44'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp44'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp44'] = $lub($Γ['global']['SplayTearDown']['$tmp44'], $Λ[$Λ.length - 1].l);
        $tmp37 = i < $tmp44;
        $Γ['global']['SplayTearDown']['$tmp37'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp44', null, true, $Γ['global']['SplayTearDown']));
        $Γ['global']['SplayTearDown']['$tmp37'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp37'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp37'] = $lub($Γ['global']['SplayTearDown']['$tmp37'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'Error',
        '$tmp45'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
    $Λ.pop();
}
$Γ['global']['SplayTearDown'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
function SplayRun() {
    var i, $tmp47, $tmp48, $tmp49;
    $Γ['global']['SplayRun']['$tmp49'] = $Γ['global']['SplayRun']['$tmp48'] = $Γ['global']['SplayRun']['$tmp47'] = $Γ['global']['SplayRun']['i'] = 0;
    i = 0;
    $scope($Γ['global']['SplayRun'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp47 = i < kSplayTreeModifications;
    $Γ['global']['SplayRun']['$tmp47'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayRun']), sec_lvl('kSplayTreeModifications', null, true, $Γ['global']['SplayRun']));
    $Γ['global']['SplayRun']['$tmp47'] instanceof Object ? $Γ['global']['SplayRun']['$tmp47'].Σ = $lub($Γ['global']['SplayRun']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp47'] = $lub($Γ['global']['SplayRun']['$tmp47'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp47', null, true, $Γ['global']['SplayRun'])),
        id: 'LOOP'
    });
    for (; $tmp47;) {
        var key, greatest, $tmp50, $tmp46, $tmp47;
        $Γ['global']['SplayRun']['$tmp47'] = $Γ['global']['SplayRun']['$tmp46'] = $Γ['global']['SplayRun']['$tmp50'] = $Γ['global']['SplayRun']['greatest'] = $Γ['global']['SplayRun']['key'] = 0;
        $rf = $scope($Γ['global']['SplayRun'], 'InsertNewNode', false)['InsertNewNode'];
        $rf.scope = $Γ['global']['SplayRun'];
        $rf.this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        key = InsertNewNode();
        $scope($Γ['global']['SplayRun'], 'key', true)['key'] = $Λ.pop().l;
        $scope($Γ['global']['SplayRun'], 'key', true)['key'] instanceof Object ? $scope($Γ['global']['SplayRun'], 'key', true)['key'].Σ = $lub($scope($Γ['global']['SplayRun'], 'key', true)['key'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayRun'], 'key', true)['key'] = $lub($scope($Γ['global']['SplayRun'], 'key', true)['key'], $Λ[$Λ.length - 1].l);
        greatest = splayTree.findGreatestLessThan(key);
        $tmp50 = greatest == null;
        $Γ['global']['SplayRun']['$tmp50'] = $lub(sec_lvl('greatest', null, true, $Γ['global']['SplayRun']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayRun']['$tmp50'] instanceof Object ? $Γ['global']['SplayRun']['$tmp50'].Σ = $lub($Γ['global']['SplayRun']['$tmp50'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp50'] = $lub($Γ['global']['SplayRun']['$tmp50'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp50', null, true, $Γ['global']['SplayRun'])),
            id: 'IF'
        });
        if ($tmp50) {
            $upgrade([
                'splayTree.remove',
                '$tmp52'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
            var $tmp51;
            $Γ['global']['SplayRun']['$tmp51'] = 0;
            $tmp51 = splayTree.remove(key);
        } else {
            $upgrade([
                'splayTree.remove',
                '$tmp51'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
            var $tmp52, $tmp53;
            $Γ['global']['SplayRun']['$tmp53'] = $Γ['global']['SplayRun']['$tmp52'] = 0;
            $tmp53 = greatest.key;
            $Γ['global']['SplayRun']['$tmp53'] = sec_lvl('greatest', 'key', false, $Γ['global']['SplayRun']);
            $Γ['global']['SplayRun']['$tmp53'] instanceof Object ? $Γ['global']['SplayRun']['$tmp53'].Σ = $lub($Γ['global']['SplayRun']['$tmp53'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp53'] = $lub($Γ['global']['SplayRun']['$tmp53'], $Λ[$Λ.length - 1].l);
            $tmp52 = splayTree.remove($tmp53);
        }
        $Λ.pop();
        $tmp46 = i++;
        $Γ['global']['SplayRun']['$tmp46'] = sec_lvl('i', null, false, $Γ['global']['SplayRun']);
        $Γ['global']['SplayRun']['$tmp46'] instanceof Object ? $Γ['global']['SplayRun']['$tmp46'].Σ = $lub($Γ['global']['SplayRun']['$tmp46'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp46'] = $lub($Γ['global']['SplayRun']['$tmp46'], $Λ[$Λ.length - 1].l);
        $tmp47 = i < kSplayTreeModifications;
        $Γ['global']['SplayRun']['$tmp47'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayRun']), sec_lvl('kSplayTreeModifications', null, true, $Γ['global']['SplayRun']));
        $Γ['global']['SplayRun']['$tmp47'] instanceof Object ? $Γ['global']['SplayRun']['$tmp47'].Σ = $lub($Γ['global']['SplayRun']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp47'] = $lub($Γ['global']['SplayRun']['$tmp47'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'key',
        'splayTree.findGreatestLessThan',
        'greatest',
        'splayTree.remove',
        '$tmp51',
        '$tmp52'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
    $Λ.pop();
    $tmp49 = performance.now();
    $rf = $scope($Γ['global']['SplayRun'], 'SplayUpdateStats', false)['SplayUpdateStats'];
    $rf.scope = $Γ['global']['SplayRun'];
    $rf.this = $Γ['global'];
    $rf['time'] = $lub(sec_lvl('$tmp49', null, true, $Γ['global']['SplayRun']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp48 = SplayUpdateStats($tmp49);
    $Γ['global']['SplayRun']['$tmp48'] = $Λ.pop().l;
    $Γ['global']['SplayRun']['$tmp48'] instanceof Object ? $Γ['global']['SplayRun']['$tmp48'].Σ = $lub($Γ['global']['SplayRun']['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp48'] = $lub($Γ['global']['SplayRun']['$tmp48'], $Λ[$Λ.length - 1].l);
}
$Γ['global']['SplayRun'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
function SplayTree() {
}
$Γ['global']['SplayTree'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
;
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.root_ = null;
$Γ['global']['$tmp']['root_'] = $Λ[$Λ.length - 1].l;
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.isEmpty = function () {
    var $tmp54, $tmp55;
    $Γ['global']['$tmp']['isEmpty']['$tmp55'] = $Γ['global']['$tmp']['isEmpty']['$tmp54'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['isEmpty']['$tmp'] = $Γ['global']['$tmp']['isEmpty'].this;
    $Γ['global']['$tmp']['isEmpty']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['isEmpty']['$tmp'].Σ = $lub($Γ['global']['$tmp']['isEmpty']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['isEmpty']['$tmp'] = $lub($Γ['global']['$tmp']['isEmpty']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp55 = $tmp.root_;
    $Γ['global']['$tmp']['isEmpty']['$tmp55'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['isEmpty']);
    $Γ['global']['$tmp']['isEmpty']['$tmp55'] instanceof Object ? $Γ['global']['$tmp']['isEmpty']['$tmp55'].Σ = $lub($Γ['global']['$tmp']['isEmpty']['$tmp55'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['isEmpty']['$tmp55'] = $lub($Γ['global']['$tmp']['isEmpty']['$tmp55'], $Λ[$Λ.length - 1].l);
    $tmp54 = !$tmp55;
    $Γ['global']['$tmp']['isEmpty']['$tmp54'] = sec_lvl('$tmp55', null, false, $Γ['global']['$tmp']['isEmpty']);
    $Γ['global']['$tmp']['isEmpty']['$tmp54'] instanceof Object ? $Γ['global']['$tmp']['isEmpty']['$tmp54'].Σ = $lub($Γ['global']['$tmp']['isEmpty']['$tmp54'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['isEmpty']['$tmp54'] = $lub($Γ['global']['$tmp']['isEmpty']['$tmp54'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp']['isEmpty'], '$tmp54')['$tmp54'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp']['isEmpty'].InvokedAsContr) {
            $Γ['global']['$tmp']['isEmpty'].this.Σ = $lub($Γ['global']['$tmp']['isEmpty'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['isEmpty'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp54;
};
$Γ['global']['$tmp']['isEmpty'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.insert = function (key, value) {
    var $tmp56, $tmp57, $tmp58, $tmp59, node, $tmp60, $tmp61;
    $Γ['global']['$tmp']['insert']['$tmp61'] = $Γ['global']['$tmp']['insert']['$tmp60'] = $Γ['global']['$tmp']['insert']['node'] = $Γ['global']['$tmp']['insert']['$tmp59'] = $Γ['global']['$tmp']['insert']['$tmp58'] = $Γ['global']['$tmp']['insert']['$tmp57'] = $Γ['global']['$tmp']['insert']['$tmp56'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['insert']);
    $rf.scope = $Γ['global']['$tmp']['insert'];
    $rf.this = $Γ['global']['$tmp']['insert']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp56 = $tmp.isEmpty();
    $Γ['global']['$tmp']['insert']['$tmp56'] = $Λ.pop().l;
    $Γ['global']['$tmp']['insert']['$tmp56'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp56'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp56'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp56'] = $lub($Γ['global']['$tmp']['insert']['$tmp56'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp56', null, true, $Γ['global']['$tmp']['insert'])),
        id: 'IF'
    });
    if ($tmp56) {
        var $tmp;
        $Γ['global']['$tmp']['insert']['$tmp'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp']['insert']);
        $rf.scope = $Γ['global']['$tmp']['insert'];
        $rf.this = $scope($Γ['global']['$tmp']['insert'], 'SplayTree', true)['SplayTree'] = {
            Σ: $Λ[$Λ.length - 1].l,
            __proto__: $rf.prototype
        };
        $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['insert']), $Λ[$Λ.length - 1].l);
        $rf['value'] = $lub(sec_lvl('value', null, true, $Γ['global']['$tmp']['insert']), $Λ[$Λ.length - 1].l);
        $rf.InvokedAsContr = true;
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp.root_ = new SplayTree.Node(key, value);
        $Γ['global']['$tmp']['insert']['$tmp']['root_'] = $Λ.pop().l;
        $Γ['global']['$tmp']['insert']['$tmp']['root_'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp']['root_'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp']['root_'] = $lub($Γ['global']['$tmp']['insert']['$tmp']['root_'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp']['insert'].InvokedAsContr) {
            $Γ['global']['$tmp']['insert'].this.Σ = $lub($Γ['global']['$tmp']['insert'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['insert'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['$tmp'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['insert']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'splay_', $Γ['global']['$tmp']['insert']);
    $rf.scope = $Γ['global']['$tmp']['insert'];
    $rf.this = $Γ['global']['$tmp']['insert']['$tmp'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['insert']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp57 = $tmp.splay_(key);
    $Γ['global']['$tmp']['insert']['$tmp57'] = $Λ.pop().l;
    $Γ['global']['$tmp']['insert']['$tmp57'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp57'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp57'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp57'] = $lub($Γ['global']['$tmp']['insert']['$tmp57'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp59 = $tmp.key;
    $Γ['global']['$tmp']['insert']['$tmp59'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['insert']);
    $Γ['global']['$tmp']['insert']['$tmp59'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp59'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp59'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp59'] = $lub($Γ['global']['$tmp']['insert']['$tmp59'], $Λ[$Λ.length - 1].l);
    $tmp58 = $tmp59 == key;
    $Γ['global']['$tmp']['insert']['$tmp58'] = $lub(sec_lvl('$tmp59', null, true, $Γ['global']['$tmp']['insert']), sec_lvl('key', null, true, $Γ['global']['$tmp']['insert']));
    $Γ['global']['$tmp']['insert']['$tmp58'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp58'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp58'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp58'] = $lub($Γ['global']['$tmp']['insert']['$tmp58'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp58', null, true, $Γ['global']['$tmp']['insert'])),
        id: 'IF'
    });
    if ($tmp58) {
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp']['insert'].InvokedAsContr) {
            $Γ['global']['$tmp']['insert'].this.Σ = $lub($Γ['global']['$tmp']['insert'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['insert'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp']['insert']);
    $rf.scope = $Γ['global']['$tmp']['insert'];
    $rf.this = $scope($Γ['global']['$tmp']['insert'], 'SplayTree', true)['SplayTree'] = {
        Σ: $Λ[$Λ.length - 1].l,
        __proto__: $rf.prototype
    };
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['insert']), $Λ[$Λ.length - 1].l);
    $rf['value'] = $lub(sec_lvl('value', null, true, $Γ['global']['$tmp']['insert']), $Λ[$Λ.length - 1].l);
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    node = new SplayTree.Node(key, value);
    $scope($Γ['global']['$tmp']['insert'], 'node', true)['node'] = $Λ.pop().l;
    $scope($Γ['global']['$tmp']['insert'], 'node', true)['node'] instanceof Object ? $scope($Γ['global']['$tmp']['insert'], 'node', true)['node'].Σ = $lub($scope($Γ['global']['$tmp']['insert'], 'node', true)['node'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['insert'], 'node', true)['node'] = $lub($scope($Γ['global']['$tmp']['insert'], 'node', true)['node'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp61 = $tmp.key;
    $Γ['global']['$tmp']['insert']['$tmp61'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['insert']);
    $Γ['global']['$tmp']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp61'] = $lub($Γ['global']['$tmp']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp60 = key > $tmp61;
    $Γ['global']['$tmp']['insert']['$tmp60'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['insert']), sec_lvl('$tmp61', null, true, $Γ['global']['$tmp']['insert']));
    $Γ['global']['$tmp']['insert']['$tmp60'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp60'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp60'] = $lub($Γ['global']['$tmp']['insert']['$tmp60'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp60', null, true, $Γ['global']['$tmp']['insert'])),
        id: 'IF'
    });
    if ($tmp60) {
        var $tmp;
        $Γ['global']['$tmp']['insert']['$tmp'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        node.left = $tmp.root_;
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['left'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        node.right = $tmp.right;
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] = sec_lvl('$tmp', 'right', false, $Γ['global']['$tmp']['insert']);
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['right'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp.right = null;
        $Γ['global']['$tmp']['insert']['$tmp']['right'] = $Λ[$Λ.length - 1].l;
    } else {
        var $tmp;
        $Γ['global']['$tmp']['insert']['$tmp'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        node.right = $tmp.root_;
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['insert'], 'node', false)['right'] = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['right'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        node.left = $tmp.left;
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] = sec_lvl('$tmp', 'left', false, $Γ['global']['$tmp']['insert']);
        $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['insert'], 'node', false)['left'] = $lub($scope($Γ['global']['$tmp']['insert'], 'node', false)['left'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['insert']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['insert']);
        $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp.left = null;
        $Γ['global']['$tmp']['insert']['$tmp']['left'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['insert']['$tmp'] = $Γ['global']['$tmp']['insert'].this;
    $Γ['global']['$tmp']['insert']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp'] = $lub($Γ['global']['$tmp']['insert']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp.root_ = node;
    $Γ['global']['$tmp']['insert']['$tmp']['root_'] = sec_lvl('node', null, false, $Γ['global']['$tmp']['insert']);
    $Γ['global']['$tmp']['insert']['$tmp']['root_'] instanceof Object ? $Γ['global']['$tmp']['insert']['$tmp']['root_'].Σ = $lub($Γ['global']['$tmp']['insert']['$tmp']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['insert']['$tmp']['root_'] = $lub($Γ['global']['$tmp']['insert']['$tmp']['root_'], $Λ[$Λ.length - 1].l);
};
$Γ['global']['$tmp']['insert'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l,
    value: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.remove = function (key) {
    var $tmp62, $tmp63, $tmp64, $tmp65, removed, $tmp66, $tmp67;
    $Γ['global']['$tmp']['remove']['$tmp67'] = $Γ['global']['$tmp']['remove']['$tmp66'] = $Γ['global']['$tmp']['remove']['removed'] = $Γ['global']['$tmp']['remove']['$tmp65'] = $Γ['global']['$tmp']['remove']['$tmp64'] = $Γ['global']['$tmp']['remove']['$tmp63'] = $Γ['global']['$tmp']['remove']['$tmp62'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['remove']);
    $rf.scope = $Γ['global']['$tmp']['remove'];
    $rf.this = $Γ['global']['$tmp']['remove']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp62 = $tmp.isEmpty();
    $Γ['global']['$tmp']['remove']['$tmp62'] = $Λ.pop().l;
    $Γ['global']['$tmp']['remove']['$tmp62'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp62'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp62'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp62'] = $lub($Γ['global']['$tmp']['remove']['$tmp62'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp62', null, true, $Γ['global']['$tmp']['remove'])),
        id: 'IF'
    });
    if ($tmp62) {
        var $tmp68, $tmp69;
        $Γ['global']['$tmp']['remove']['$tmp69'] = $Γ['global']['$tmp']['remove']['$tmp68'] = 0;
        $tmp69 = 'Key not found: ' + key;
        $Γ['global']['$tmp']['remove']['$tmp69'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('key', null, true, $Γ['global']['$tmp']['remove']));
        $Γ['global']['$tmp']['remove']['$tmp69'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp69'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp69'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp69'] = $lub($Γ['global']['$tmp']['remove']['$tmp69'], $Λ[$Λ.length - 1].l);
        $tmp68 = Error($tmp69);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.len - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp68', null, true, $Γ['global']['$tmp']['remove'])) };
        throw $tmp68;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp68'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['remove']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'splay_', $Γ['global']['$tmp']['remove']);
    $rf.scope = $Γ['global']['$tmp']['remove'];
    $rf.this = $Γ['global']['$tmp']['remove']['$tmp'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['remove']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp63 = $tmp.splay_(key);
    $Γ['global']['$tmp']['remove']['$tmp63'] = $Λ.pop().l;
    $Γ['global']['$tmp']['remove']['$tmp63'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp63'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp63'] = $lub($Γ['global']['$tmp']['remove']['$tmp63'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp65 = $tmp.key;
    $Γ['global']['$tmp']['remove']['$tmp65'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['remove']);
    $Γ['global']['$tmp']['remove']['$tmp65'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp65'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp65'] = $lub($Γ['global']['$tmp']['remove']['$tmp65'], $Λ[$Λ.length - 1].l);
    $tmp64 = $tmp65 != key;
    $Γ['global']['$tmp']['remove']['$tmp64'] = $lub(sec_lvl('$tmp65', null, true, $Γ['global']['$tmp']['remove']), sec_lvl('key', null, true, $Γ['global']['$tmp']['remove']));
    $Γ['global']['$tmp']['remove']['$tmp64'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp64'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp64'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp64'] = $lub($Γ['global']['$tmp']['remove']['$tmp64'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp64', null, true, $Γ['global']['$tmp']['remove'])),
        id: 'IF'
    });
    if ($tmp64) {
        var $tmp70, $tmp71;
        $Γ['global']['$tmp']['remove']['$tmp71'] = $Γ['global']['$tmp']['remove']['$tmp70'] = 0;
        $tmp71 = 'Key not found: ' + key;
        $Γ['global']['$tmp']['remove']['$tmp71'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('key', null, true, $Γ['global']['$tmp']['remove']));
        $Γ['global']['$tmp']['remove']['$tmp71'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp71'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp71'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp71'] = $lub($Γ['global']['$tmp']['remove']['$tmp71'], $Λ[$Λ.length - 1].l);
        $tmp70 = Error($tmp71);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.len - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp70', null, true, $Γ['global']['$tmp']['remove'])) };
        throw $tmp70;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp70'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['remove']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    removed = $tmp.root_;
    $scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
    $scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'] instanceof Object ? $scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'].Σ = $lub($scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'] = $lub($scope($Γ['global']['$tmp']['remove'], 'removed', true)['removed'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
    $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp67 = $tmp.left;
    $Γ['global']['$tmp']['remove']['$tmp67'] = sec_lvl('$tmp', 'left', false, $Γ['global']['$tmp']['remove']);
    $Γ['global']['$tmp']['remove']['$tmp67'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp67'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp67'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp67'] = $lub($Γ['global']['$tmp']['remove']['$tmp67'], $Λ[$Λ.length - 1].l);
    $tmp66 = !$tmp67;
    $Γ['global']['$tmp']['remove']['$tmp66'] = sec_lvl('$tmp67', null, false, $Γ['global']['$tmp']['remove']);
    $Γ['global']['$tmp']['remove']['$tmp66'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp66'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp66'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp66'] = $lub($Γ['global']['$tmp']['remove']['$tmp66'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp66', null, true, $Γ['global']['$tmp']['remove'])),
        id: 'IF'
    });
    if ($tmp66) {
        $upgrade(['$tmp72'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['remove']);
        var $tmp;
        $Γ['global']['$tmp']['remove']['$tmp'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp.root_ = $tmp.right;
        $Γ['global']['$tmp']['remove']['$tmp']['root_'] = sec_lvl('$tmp', 'right', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp']['root_'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp']['root_'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp']['root_'] = $lub($Γ['global']['$tmp']['remove']['$tmp']['root_'], $Λ[$Λ.length - 1].l);
    } else {
        var right, $tmp72;
        $Γ['global']['$tmp']['remove']['$tmp72'] = $Γ['global']['$tmp']['remove']['right'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        right = $tmp.right;
        $scope($Γ['global']['$tmp']['remove'], 'right', true)['right'] = sec_lvl('$tmp', 'right', false, $Γ['global']['$tmp']['remove']);
        $scope($Γ['global']['$tmp']['remove'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['remove'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp']['remove'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['remove'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp']['remove'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp.root_ = $tmp.left;
        $Γ['global']['$tmp']['remove']['$tmp']['root_'] = sec_lvl('$tmp', 'left', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp']['root_'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp']['root_'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp']['root_'] = $lub($Γ['global']['$tmp']['remove']['$tmp']['root_'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $rf = $prop('$tmp', 'splay_', $Γ['global']['$tmp']['remove']);
        $rf.scope = $Γ['global']['$tmp']['remove'];
        $rf.this = $Γ['global']['$tmp']['remove']['$tmp'];
        $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['remove']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp72 = $tmp.splay_(key);
        $Γ['global']['$tmp']['remove']['$tmp72'] = $Λ.pop().l;
        $Γ['global']['$tmp']['remove']['$tmp72'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp72'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp72'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp72'] = $lub($Γ['global']['$tmp']['remove']['$tmp72'], $Λ[$Λ.length - 1].l);
        $tmp = this;
        $Γ['global']['$tmp']['remove']['$tmp'] = $Γ['global']['$tmp']['remove'].this;
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['remove']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp'] = $lub($Γ['global']['$tmp']['remove']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp.right = right;
        $Γ['global']['$tmp']['remove']['$tmp']['right'] = sec_lvl('right', null, false, $Γ['global']['$tmp']['remove']);
        $Γ['global']['$tmp']['remove']['$tmp']['right'] instanceof Object ? $Γ['global']['$tmp']['remove']['$tmp']['right'].Σ = $lub($Γ['global']['$tmp']['remove']['$tmp']['right'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['remove']['$tmp']['right'] = $lub($Γ['global']['$tmp']['remove']['$tmp']['right'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp']['remove'], 'removed')['removed'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp']['remove'].InvokedAsContr) {
            $Γ['global']['$tmp']['remove'].this.Σ = $lub($Γ['global']['$tmp']['remove'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['remove'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return removed;
};
$Γ['global']['$tmp']['remove'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.find = function (key) {
    var $tmp73, $tmp74, $tmp75, $tmp112, $tmp113;
    $Γ['global']['$tmp']['find']['$tmp113'] = $Γ['global']['$tmp']['find']['$tmp112'] = $Γ['global']['$tmp']['find']['$tmp75'] = $Γ['global']['$tmp']['find']['$tmp74'] = $Γ['global']['$tmp']['find']['$tmp73'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['find']['$tmp'] = $Γ['global']['$tmp']['find'].this;
    $Γ['global']['$tmp']['find']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp'] = $lub($Γ['global']['$tmp']['find']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['find']);
    $rf.scope = $Γ['global']['$tmp']['find'];
    $rf.this = $Γ['global']['$tmp']['find']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp73 = $tmp.isEmpty();
    $Γ['global']['$tmp']['find']['$tmp73'] = $Λ.pop().l;
    $Γ['global']['$tmp']['find']['$tmp73'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp73'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp73'] = $lub($Γ['global']['$tmp']['find']['$tmp73'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp73', null, true, $Γ['global']['$tmp']['find'])),
        id: 'IF'
    });
    if ($tmp73) {
        var $tmp76;
        $Γ['global']['$tmp']['find']['$tmp76'] = 0;
        $tmp76 = null;
        $Γ['global']['$tmp']['find']['$tmp76'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp']['find'], '$tmp76')['$tmp76'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp']['find'].InvokedAsContr) {
                $Γ['global']['$tmp']['find'].this.Σ = $lub($Γ['global']['$tmp']['find'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['find'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp76;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['find']['$tmp'] = $Γ['global']['$tmp']['find'].this;
    $Γ['global']['$tmp']['find']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp'] = $lub($Γ['global']['$tmp']['find']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'splay_', $Γ['global']['$tmp']['find']);
    $rf.scope = $Γ['global']['$tmp']['find'];
    $rf.this = $Γ['global']['$tmp']['find']['$tmp'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['find']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp74 = $tmp.splay_(key);
    $Γ['global']['$tmp']['find']['$tmp74'] = $Λ.pop().l;
    $Γ['global']['$tmp']['find']['$tmp74'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp74'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp74'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp74'] = $lub($Γ['global']['$tmp']['find']['$tmp74'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['find']['$tmp'] = $Γ['global']['$tmp']['find'].this;
    $Γ['global']['$tmp']['find']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp'] = $lub($Γ['global']['$tmp']['find']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['find']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['find']);
    $Γ['global']['$tmp']['find']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp'] = $lub($Γ['global']['$tmp']['find']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp113 = $tmp.key;
    $Γ['global']['$tmp']['find']['$tmp113'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['find']);
    $Γ['global']['$tmp']['find']['$tmp113'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp113'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp113'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp113'] = $lub($Γ['global']['$tmp']['find']['$tmp113'], $Λ[$Λ.length - 1].l);
    $tmp112 = $tmp113 == key;
    $Γ['global']['$tmp']['find']['$tmp112'] = $lub(sec_lvl('$tmp113', null, true, $Γ['global']['$tmp']['find']), sec_lvl('key', null, true, $Γ['global']['$tmp']['find']));
    $Γ['global']['$tmp']['find']['$tmp112'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp112'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp112'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp112'] = $lub($Γ['global']['$tmp']['find']['$tmp112'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp112', null, true, $Γ['global']['$tmp']['find'])),
        id: 'IF'
    });
    if ($tmp112) {
        var $tmp;
        $Γ['global']['$tmp']['find']['$tmp'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['find']['$tmp'] = $Γ['global']['$tmp']['find'].this;
        $Γ['global']['$tmp']['find']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp'] = $lub($Γ['global']['$tmp']['find']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp75 = $tmp.root_;
        $Γ['global']['$tmp']['find']['$tmp75'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['find']);
        $Γ['global']['$tmp']['find']['$tmp75'] instanceof Object ? $Γ['global']['$tmp']['find']['$tmp75'].Σ = $lub($Γ['global']['$tmp']['find']['$tmp75'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['find']['$tmp75'] = $lub($Γ['global']['$tmp']['find']['$tmp75'], $Λ[$Λ.length - 1].l);
    } else {
        $tmp75 = null;
        $Γ['global']['$tmp']['find']['$tmp75'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp']['find'], '$tmp75')['$tmp75'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp']['find'].InvokedAsContr) {
            $Γ['global']['$tmp']['find'].this.Σ = $lub($Γ['global']['$tmp']['find'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['find'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp75;
};
$Γ['global']['$tmp']['find'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.findMax = function (opt_startNode) {
    var $tmp77, current, $tmp78, $tmp79;
    $Γ['global']['$tmp']['findMax']['$tmp79'] = $Γ['global']['$tmp']['findMax']['$tmp78'] = $Γ['global']['$tmp']['findMax']['current'] = $Γ['global']['$tmp']['findMax']['$tmp77'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['findMax']['$tmp'] = $Γ['global']['$tmp']['findMax'].this;
    $Γ['global']['$tmp']['findMax']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp'] = $lub($Γ['global']['$tmp']['findMax']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['findMax']);
    $rf.scope = $Γ['global']['$tmp']['findMax'];
    $rf.this = $Γ['global']['$tmp']['findMax']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp77 = $tmp.isEmpty();
    $Γ['global']['$tmp']['findMax']['$tmp77'] = $Λ.pop().l;
    $Γ['global']['$tmp']['findMax']['$tmp77'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp77'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp77'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp77'] = $lub($Γ['global']['$tmp']['findMax']['$tmp77'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp77', null, true, $Γ['global']['$tmp']['findMax'])),
        id: 'IF'
    });
    if ($tmp77) {
        var $tmp80;
        $Γ['global']['$tmp']['findMax']['$tmp80'] = 0;
        $tmp80 = null;
        $Γ['global']['$tmp']['findMax']['$tmp80'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp']['findMax'], '$tmp80')['$tmp80'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp']['findMax'].InvokedAsContr) {
                $Γ['global']['$tmp']['findMax'].this.Σ = $lub($Γ['global']['$tmp']['findMax'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findMax'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp80;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['findMax']['$tmp'] = $Γ['global']['$tmp']['findMax'].this;
    $Γ['global']['$tmp']['findMax']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp'] = $lub($Γ['global']['$tmp']['findMax']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp78 = $tmp.root_;
    $Γ['global']['$tmp']['findMax']['$tmp78'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['findMax']);
    $Γ['global']['$tmp']['findMax']['$tmp78'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp78'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp78'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp78'] = $lub($Γ['global']['$tmp']['findMax']['$tmp78'], $Λ[$Λ.length - 1].l);
    current = opt_startNode || $tmp78;
    $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] = $lub(sec_lvl('opt_startNode', null, true, $Γ['global']['$tmp']['findMax']), sec_lvl('$tmp78', null, true, $Γ['global']['$tmp']['findMax']));
    $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    $tmp79 = current.right;
    $Γ['global']['$tmp']['findMax']['$tmp79'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['findMax']);
    $Γ['global']['$tmp']['findMax']['$tmp79'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp79'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp79'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp79'] = $lub($Γ['global']['$tmp']['findMax']['$tmp79'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp79', null, true, $Γ['global']['$tmp']['findMax'])),
        id: 'LOOP'
    });
    while ($tmp79) {
        current = current.right;
        $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['findMax']);
        $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['findMax'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
        var $tmp79;
        $Γ['global']['$tmp']['findMax']['$tmp79'] = 0;
        $tmp79 = current.right;
        $Γ['global']['$tmp']['findMax']['$tmp79'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['findMax']);
        $Γ['global']['$tmp']['findMax']['$tmp79'] instanceof Object ? $Γ['global']['$tmp']['findMax']['$tmp79'].Σ = $lub($Γ['global']['$tmp']['findMax']['$tmp79'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findMax']['$tmp79'] = $lub($Γ['global']['$tmp']['findMax']['$tmp79'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp']['findMax'], 'current')['current'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp']['findMax'].InvokedAsContr) {
            $Γ['global']['$tmp']['findMax'].this.Σ = $lub($Γ['global']['$tmp']['findMax'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findMax'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return current;
};
$Γ['global']['$tmp']['findMax'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    opt_startNode: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.findGreatestLessThan = function (key) {
    var $tmp81, $tmp82, $tmp83, $tmp84;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'] = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'] = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'] = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['findGreatestLessThan']);
    $rf.scope = $Γ['global']['$tmp']['findGreatestLessThan'];
    $rf.this = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp81 = $tmp.isEmpty();
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'] = $Λ.pop().l;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp81'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp81', null, true, $Γ['global']['$tmp']['findGreatestLessThan'])),
        id: 'IF'
    });
    if ($tmp81) {
        var $tmp85;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp85'] = 0;
        $tmp85 = null;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp85'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp']['findGreatestLessThan'], '$tmp85')['$tmp85'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp']['findGreatestLessThan'].InvokedAsContr) {
                $Γ['global']['$tmp']['findGreatestLessThan'].this.Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findGreatestLessThan'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp85;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp = this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'splay_', $Γ['global']['$tmp']['findGreatestLessThan']);
    $rf.scope = $Γ['global']['$tmp']['findGreatestLessThan'];
    $rf.this = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['findGreatestLessThan']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp82 = $tmp.splay_(key);
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'] = $Λ.pop().l;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp82'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp = $tmp.root_;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['findGreatestLessThan']);
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp84 = $tmp.key;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['findGreatestLessThan']);
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp84'], $Λ[$Λ.length - 1].l);
    $tmp83 = $tmp84 < key;
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'] = $lub(sec_lvl('$tmp84', null, true, $Γ['global']['$tmp']['findGreatestLessThan']), sec_lvl('key', null, true, $Γ['global']['$tmp']['findGreatestLessThan']));
    $Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp83'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp83', null, true, $Γ['global']['$tmp']['findGreatestLessThan'])),
        id: 'IF'
    });
    if ($tmp83) {
        $upgrade(['$tmp87'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['findGreatestLessThan']);
        var $tmp86;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp86 = $tmp.root_;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['findGreatestLessThan']);
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp86'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp']['findGreatestLessThan'], '$tmp86')['$tmp86'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp']['findGreatestLessThan'].InvokedAsContr) {
                $Γ['global']['$tmp']['findGreatestLessThan'].this.Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan'].this.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findGreatestLessThan'].this };
            } else {
                $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp86;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp114;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['findGreatestLessThan']);
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp114 = $tmp.left;
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'] = sec_lvl('$tmp', 'left', false, $Γ['global']['$tmp']['findGreatestLessThan']);
        $Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp114'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp114', null, true, $Γ['global']['$tmp']['findGreatestLessThan'])),
            id: 'IF'
        });
        if ($tmp114) {
            var $tmp87, $tmp88;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'] = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'] = 0;
            $tmp = this;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp = this;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $Γ['global']['$tmp']['findGreatestLessThan'].this;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp = $tmp.root_;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['findGreatestLessThan']);
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp88 = $tmp.left;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'] = sec_lvl('$tmp', 'left', false, $Γ['global']['$tmp']['findGreatestLessThan']);
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp88'], $Λ[$Λ.length - 1].l);
            $rf = $prop('$tmp', 'findMax', $Γ['global']['$tmp']['findGreatestLessThan']);
            $rf.scope = $Γ['global']['$tmp']['findGreatestLessThan'];
            $rf.this = $Γ['global']['$tmp']['findGreatestLessThan']['$tmp'];
            $rf['opt_startNode'] = $lub(sec_lvl('$tmp88', null, true, $Γ['global']['$tmp']['findGreatestLessThan']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp87 = $tmp.findMax($tmp88);
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'] = $Λ.pop().l;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'] instanceof Object ? $Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'].Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'] = $lub($Γ['global']['$tmp']['findGreatestLessThan']['$tmp87'], $Λ[$Λ.length - 1].l);
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['$tmp']['findGreatestLessThan'], '$tmp87')['$tmp87'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['$tmp']['findGreatestLessThan'].InvokedAsContr) {
                    $Γ['global']['$tmp']['findGreatestLessThan'].this.Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan'].this.Σ, $old_pc.l);
                    $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findGreatestLessThan'].this };
                } else {
                    $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp87;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
            $upgrade(['$tmp87'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['findGreatestLessThan']);
            var $tmp89;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp89'] = 0;
            $tmp89 = null;
            $Γ['global']['$tmp']['findGreatestLessThan']['$tmp89'] = $Λ[$Λ.length - 1].l;
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['$tmp']['findGreatestLessThan'], '$tmp89')['$tmp89'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.len - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['$tmp']['findGreatestLessThan'].InvokedAsContr) {
                    $Γ['global']['$tmp']['findGreatestLessThan'].this.Σ = $lub($Γ['global']['$tmp']['findGreatestLessThan'].this.Σ, $old_pc.l);
                    $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['findGreatestLessThan'].this };
                } else {
                    $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp89;
            var $shouldComp = { 'lbl': 'FUNC' };
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
};
$Γ['global']['$tmp']['findGreatestLessThan'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.exportKeys = function () {
    var result, $tmp90, $tmp91;
    $Γ['global']['$tmp']['exportKeys']['$tmp91'] = $Γ['global']['$tmp']['exportKeys']['$tmp90'] = $Γ['global']['$tmp']['exportKeys']['result'] = 0;
    result = [];
    $scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'] = 0;
    $scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'] instanceof Object ? $scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'].Σ = $lub($scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'] = $lub($scope($Γ['global']['$tmp']['exportKeys'], 'result', true)['result'], $Λ[$Λ.length - 1].l);
    $Γ['global']['$tmp']['exportKeys']['result'] = {
        __proto__: {},
        scope: $Γ['global']['$tmp']['exportKeys'],
        Σ: $lub($Λ[$Λ.length - 1].l)
    };
    $tmp = this;
    $Γ['global']['$tmp']['exportKeys']['$tmp'] = $Γ['global']['$tmp']['exportKeys'].this;
    $Γ['global']['$tmp']['exportKeys']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['exportKeys']);
    $rf.scope = $Γ['global']['$tmp']['exportKeys'];
    $rf.this = $Γ['global']['$tmp']['exportKeys']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp91 = $tmp.isEmpty();
    $Γ['global']['$tmp']['exportKeys']['$tmp91'] = $Λ.pop().l;
    $Γ['global']['$tmp']['exportKeys']['$tmp91'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp91'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp91'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp91'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp91'], $Λ[$Λ.length - 1].l);
    $tmp90 = !$tmp91;
    $Γ['global']['$tmp']['exportKeys']['$tmp90'] = sec_lvl('$tmp91', null, false, $Γ['global']['$tmp']['exportKeys']);
    $Γ['global']['$tmp']['exportKeys']['$tmp90'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp90'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp90'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp90'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp90'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp90', null, true, $Γ['global']['$tmp']['exportKeys'])),
        id: 'IF'
    });
    if ($tmp90) {
        var $tmp92, $tmp93;
        $Γ['global']['$tmp']['exportKeys']['$tmp93'] = $Γ['global']['$tmp']['exportKeys']['$tmp92'] = 0;
        $tmp = this;
        $Γ['global']['$tmp']['exportKeys']['$tmp'] = $Γ['global']['$tmp']['exportKeys'].this;
        $Γ['global']['$tmp']['exportKeys']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp = $tmp.root_;
        $Γ['global']['$tmp']['exportKeys']['$tmp'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['exportKeys']);
        $Γ['global']['$tmp']['exportKeys']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp'], $Λ[$Λ.length - 1].l);
        $tmp93 = function (node) {
            var $tmp94, $tmp95;
            $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'] = $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp94'] = 0;
            $tmp95 = node.key;
            $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'] = sec_lvl('node', 'key', false, $Γ['global']['$tmp']['exportKeys']['$tmp93']);
            $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp93']['$tmp95'], $Λ[$Λ.length - 1].l);
            $tmp94 = result.push($tmp95);
        };
        $Γ['global']['$tmp']['exportKeys']['$tmp93'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            node: $Λ[$Λ.length - 1].l
        };
        $rf = $prop('$tmp', 'traverse_', $Γ['global']['$tmp']['exportKeys']);
        $rf.scope = $Γ['global']['$tmp']['exportKeys'];
        $rf.this = $Γ['global']['$tmp']['exportKeys']['$tmp'];
        $rf['f'] = $lub(sec_lvl('$tmp93', null, true, $Γ['global']['$tmp']['exportKeys']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp92 = $tmp.traverse_($tmp93);
        $Γ['global']['$tmp']['exportKeys']['$tmp92'] = $Λ.pop().l;
        $Γ['global']['$tmp']['exportKeys']['$tmp92'] instanceof Object ? $Γ['global']['$tmp']['exportKeys']['$tmp92'].Σ = $lub($Γ['global']['$tmp']['exportKeys']['$tmp92'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['exportKeys']['$tmp92'] = $lub($Γ['global']['$tmp']['exportKeys']['$tmp92'], $Λ[$Λ.length - 1].l);
    } else {
        $upgrade([
            'result.push',
            '$tmp94',
            '$tmp93',
            '$tmp92'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['exportKeys']);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp']['exportKeys'], 'result')['result'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp']['exportKeys'].InvokedAsContr) {
            $Γ['global']['$tmp']['exportKeys'].this.Σ = $lub($Γ['global']['$tmp']['exportKeys'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['exportKeys'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return result;
};
$Γ['global']['$tmp']['exportKeys'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.prototype;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.splay_ = function (key) {
    var $tmp96, dummy, left, right, current;
    $Γ['global']['$tmp']['splay_']['current'] = $Γ['global']['$tmp']['splay_']['right'] = $Γ['global']['$tmp']['splay_']['left'] = $Γ['global']['$tmp']['splay_']['dummy'] = $Γ['global']['$tmp']['splay_']['$tmp96'] = 0;
    $tmp = this;
    $Γ['global']['$tmp']['splay_']['$tmp'] = $Γ['global']['$tmp']['splay_'].this;
    $Γ['global']['$tmp']['splay_']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp'] = $lub($Γ['global']['$tmp']['splay_']['$tmp'], $Λ[$Λ.length - 1].l);
    $rf = $prop('$tmp', 'isEmpty', $Γ['global']['$tmp']['splay_']);
    $rf.scope = $Γ['global']['$tmp']['splay_'];
    $rf.this = $Γ['global']['$tmp']['splay_']['$tmp'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp96 = $tmp.isEmpty();
    $Γ['global']['$tmp']['splay_']['$tmp96'] = $Λ.pop().l;
    $Γ['global']['$tmp']['splay_']['$tmp96'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp96'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp96'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp96'] = $lub($Γ['global']['$tmp']['splay_']['$tmp96'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp96', null, true, $Γ['global']['$tmp']['splay_'])),
        id: 'IF'
    });
    if ($tmp96) {
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp']['splay_'].InvokedAsContr) {
            $Γ['global']['$tmp']['splay_'].this.Σ = $lub($Γ['global']['$tmp']['splay_'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp']['splay_'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp']['splay_']);
    $rf.scope = $Γ['global']['$tmp']['splay_'];
    $rf.this = $scope($Γ['global']['$tmp']['splay_'], 'SplayTree', true)['SplayTree'] = {
        Σ: $Λ[$Λ.length - 1].l,
        __proto__: $rf.prototype
    };
    $rf['key'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
    $rf['value'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    right = new SplayTree.Node(null, null);
    $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] = $Λ.pop().l;
    $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
    left = right;
    $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] = sec_lvl('right', null, false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
    dummy = left;
    $scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'] = sec_lvl('left', null, false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'dummy', true)['dummy'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['splay_']['$tmp'] = $Γ['global']['$tmp']['splay_'].this;
    $Γ['global']['$tmp']['splay_']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp'] = $lub($Γ['global']['$tmp']['splay_']['$tmp'], $Λ[$Λ.length - 1].l);
    current = $tmp.root_;
    $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = sec_lvl('$tmp', 'root_', false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        id: 'LOOP'
    });
    while (true) {
        var $tmp97, $tmp98;
        $Γ['global']['$tmp']['splay_']['$tmp98'] = $Γ['global']['$tmp']['splay_']['$tmp97'] = 0;
        $tmp98 = current.key;
        $Γ['global']['$tmp']['splay_']['$tmp98'] = sec_lvl('current', 'key', false, $Γ['global']['$tmp']['splay_']);
        $Γ['global']['$tmp']['splay_']['$tmp98'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp98'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp98'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp98'] = $lub($Γ['global']['$tmp']['splay_']['$tmp98'], $Λ[$Λ.length - 1].l);
        $tmp97 = key < $tmp98;
        $Γ['global']['$tmp']['splay_']['$tmp97'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['splay_']), sec_lvl('$tmp98', null, true, $Γ['global']['$tmp']['splay_']));
        $Γ['global']['$tmp']['splay_']['$tmp97'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp97'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp97'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp97'] = $lub($Γ['global']['$tmp']['splay_']['$tmp97'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp97', null, true, $Γ['global']['$tmp']['splay_'])),
            id: 'IF'
        });
        if ($tmp97) {
            var $tmp99, $tmp100, $tmp101, $tmp102;
            $Γ['global']['$tmp']['splay_']['$tmp102'] = $Γ['global']['$tmp']['splay_']['$tmp101'] = $Γ['global']['$tmp']['splay_']['$tmp100'] = $Γ['global']['$tmp']['splay_']['$tmp99'] = 0;
            $tmp100 = current.left;
            $Γ['global']['$tmp']['splay_']['$tmp100'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
            $Γ['global']['$tmp']['splay_']['$tmp100'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp100'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp100'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp100'] = $lub($Γ['global']['$tmp']['splay_']['$tmp100'], $Λ[$Λ.length - 1].l);
            $tmp99 = !$tmp100;
            $Γ['global']['$tmp']['splay_']['$tmp99'] = sec_lvl('$tmp100', null, false, $Γ['global']['$tmp']['splay_']);
            $Γ['global']['$tmp']['splay_']['$tmp99'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp99'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp99'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp99'] = $lub($Γ['global']['$tmp']['splay_']['$tmp99'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp99', null, true, $Γ['global']['$tmp']['splay_'])),
                id: 'IF'
            });
            if ($tmp99) {
                break;
                var $shouldComp = { 'lbl': 'LOOP' };
            } else {
            }
            if ($shouldComp)
                $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
            $Λ.pop();
            $tmp = current.left;
            $Γ['global']['$tmp']['splay_']['$tmp'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
            $Γ['global']['$tmp']['splay_']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp'] = $lub($Γ['global']['$tmp']['splay_']['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp102 = $tmp.key;
            $Γ['global']['$tmp']['splay_']['$tmp102'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['splay_']);
            $Γ['global']['$tmp']['splay_']['$tmp102'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp102'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp102'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp102'] = $lub($Γ['global']['$tmp']['splay_']['$tmp102'], $Λ[$Λ.length - 1].l);
            $tmp101 = key < $tmp102;
            $Γ['global']['$tmp']['splay_']['$tmp101'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['splay_']), sec_lvl('$tmp102', null, true, $Γ['global']['$tmp']['splay_']));
            $Γ['global']['$tmp']['splay_']['$tmp101'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp101'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp101'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp101'] = $lub($Γ['global']['$tmp']['splay_']['$tmp101'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp101', null, true, $Γ['global']['$tmp']['splay_'])),
                id: 'IF'
            });
            if ($tmp101) {
                var tmp, $tmp103, $tmp104;
                $Γ['global']['$tmp']['splay_']['$tmp104'] = $Γ['global']['$tmp']['splay_']['$tmp103'] = $Γ['global']['$tmp']['splay_']['tmp'] = 0;
                tmp = current.left;
                $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'], $Λ[$Λ.length - 1].l);
                current.left = tmp.right;
                $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] = sec_lvl('tmp', 'right', false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'], $Λ[$Λ.length - 1].l);
                tmp.right = current;
                $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['right'], $Λ[$Λ.length - 1].l);
                current = tmp;
                $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = sec_lvl('tmp', null, false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
                $tmp104 = current.left;
                $Γ['global']['$tmp']['splay_']['$tmp104'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp104'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp104'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp104'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp104'] = $lub($Γ['global']['$tmp']['splay_']['$tmp104'], $Λ[$Λ.length - 1].l);
                $tmp103 = !$tmp104;
                $Γ['global']['$tmp']['splay_']['$tmp103'] = sec_lvl('$tmp104', null, false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp103'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp103'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp103'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp103'] = $lub($Γ['global']['$tmp']['splay_']['$tmp103'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp103', null, true, $Γ['global']['$tmp']['splay_'])),
                    id: 'IF'
                });
                if ($tmp103) {
                    break;
                    var $shouldComp = { 'lbl': 'LOOP' };
                } else {
                }
                if ($shouldComp)
                    $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                $Λ.pop();
            } else {
            }
            $Λ.pop();
            right.left = current;
            $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
            $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'], $Λ[$Λ.length - 1].l);
            right = current;
            $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
            $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
            current = current.left;
            $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
            $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
        } else {
            var $tmp115, $tmp116;
            $Γ['global']['$tmp']['splay_']['$tmp116'] = $Γ['global']['$tmp']['splay_']['$tmp115'] = 0;
            $tmp116 = current.key;
            $Γ['global']['$tmp']['splay_']['$tmp116'] = sec_lvl('current', 'key', false, $Γ['global']['$tmp']['splay_']);
            $Γ['global']['$tmp']['splay_']['$tmp116'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp116'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp116'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp116'] = $lub($Γ['global']['$tmp']['splay_']['$tmp116'], $Λ[$Λ.length - 1].l);
            $tmp115 = key > $tmp116;
            $Γ['global']['$tmp']['splay_']['$tmp115'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['splay_']), sec_lvl('$tmp116', null, true, $Γ['global']['$tmp']['splay_']));
            $Γ['global']['$tmp']['splay_']['$tmp115'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp115'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp115'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp115'] = $lub($Γ['global']['$tmp']['splay_']['$tmp115'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp115', null, true, $Γ['global']['$tmp']['splay_'])),
                id: 'IF'
            });
            if ($tmp115) {
                var $tmp105, $tmp106, $tmp107, $tmp108;
                $Γ['global']['$tmp']['splay_']['$tmp108'] = $Γ['global']['$tmp']['splay_']['$tmp107'] = $Γ['global']['$tmp']['splay_']['$tmp106'] = $Γ['global']['$tmp']['splay_']['$tmp105'] = 0;
                $tmp106 = current.right;
                $Γ['global']['$tmp']['splay_']['$tmp106'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp106'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp106'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp106'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp106'] = $lub($Γ['global']['$tmp']['splay_']['$tmp106'], $Λ[$Λ.length - 1].l);
                $tmp105 = !$tmp106;
                $Γ['global']['$tmp']['splay_']['$tmp105'] = sec_lvl('$tmp106', null, false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp105'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp105'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp105'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp105'] = $lub($Γ['global']['$tmp']['splay_']['$tmp105'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp105', null, true, $Γ['global']['$tmp']['splay_'])),
                    id: 'IF'
                });
                if ($tmp105) {
                    break;
                    var $shouldComp = { 'lbl': 'LOOP' };
                } else {
                }
                if ($shouldComp)
                    $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                $Λ.pop();
                $tmp = current.right;
                $Γ['global']['$tmp']['splay_']['$tmp'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp'] = $lub($Γ['global']['$tmp']['splay_']['$tmp'], $Λ[$Λ.length - 1].l);
                $tmp108 = $tmp.key;
                $Γ['global']['$tmp']['splay_']['$tmp108'] = sec_lvl('$tmp', 'key', false, $Γ['global']['$tmp']['splay_']);
                $Γ['global']['$tmp']['splay_']['$tmp108'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp108'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp108'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp108'] = $lub($Γ['global']['$tmp']['splay_']['$tmp108'], $Λ[$Λ.length - 1].l);
                $tmp107 = key > $tmp108;
                $Γ['global']['$tmp']['splay_']['$tmp107'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp']['splay_']), sec_lvl('$tmp108', null, true, $Γ['global']['$tmp']['splay_']));
                $Γ['global']['$tmp']['splay_']['$tmp107'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp107'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp107'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp107'] = $lub($Γ['global']['$tmp']['splay_']['$tmp107'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp107', null, true, $Γ['global']['$tmp']['splay_'])),
                    id: 'IF'
                });
                if ($tmp107) {
                    var tmp, $tmp109, $tmp110;
                    $Γ['global']['$tmp']['splay_']['$tmp110'] = $Γ['global']['$tmp']['splay_']['$tmp109'] = $Γ['global']['$tmp']['splay_']['tmp'] = 0;
                    tmp = current.right;
                    $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
                    $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', true)['tmp'], $Λ[$Λ.length - 1].l);
                    current.right = tmp.left;
                    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] = sec_lvl('tmp', 'left', false, $Γ['global']['$tmp']['splay_']);
                    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'], $Λ[$Λ.length - 1].l);
                    tmp.left = current;
                    $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
                    $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'tmp', false)['left'], $Λ[$Λ.length - 1].l);
                    current = tmp;
                    $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = sec_lvl('tmp', null, false, $Γ['global']['$tmp']['splay_']);
                    $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
                    $tmp110 = current.right;
                    $Γ['global']['$tmp']['splay_']['$tmp110'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
                    $Γ['global']['$tmp']['splay_']['$tmp110'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp110'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp110'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp110'] = $lub($Γ['global']['$tmp']['splay_']['$tmp110'], $Λ[$Λ.length - 1].l);
                    $tmp109 = !$tmp110;
                    $Γ['global']['$tmp']['splay_']['$tmp109'] = sec_lvl('$tmp110', null, false, $Γ['global']['$tmp']['splay_']);
                    $Γ['global']['$tmp']['splay_']['$tmp109'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp109'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp109'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp109'] = $lub($Γ['global']['$tmp']['splay_']['$tmp109'], $Λ[$Λ.length - 1].l);
                    $Λ.push({
                        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp109', null, true, $Γ['global']['$tmp']['splay_'])),
                        id: 'IF'
                    });
                    if ($tmp109) {
                        break;
                        var $shouldComp = { 'lbl': 'LOOP' };
                    } else {
                    }
                    if ($shouldComp)
                        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                    $Λ.pop();
                } else {
                }
                $Λ.pop();
                left.right = current;
                $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'], $Λ[$Λ.length - 1].l);
                left = current;
                $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
                current = current.right;
                $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
                $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
            } else {
                break;
                var $shouldComp = { 'lbl': 'LOOP' };
            }
            if ($shouldComp)
                $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
            $Λ.pop();
        }
        $Λ.pop();
    }
    $Λ.pop();
    left.right = current.left;
    $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'left', false)['right'], $Λ[$Λ.length - 1].l);
    right.left = current.right;
    $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'right', false)['left'], $Λ[$Λ.length - 1].l);
    current.left = dummy.right;
    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] = sec_lvl('dummy', 'right', false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['left'], $Λ[$Λ.length - 1].l);
    current.right = dummy.left;
    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] = sec_lvl('dummy', 'left', false, $Γ['global']['$tmp']['splay_']);
    $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'].Σ = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'] = $lub($scope($Γ['global']['$tmp']['splay_'], 'current', false)['right'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['$tmp']['splay_']['$tmp'] = $Γ['global']['$tmp']['splay_'].this;
    $Γ['global']['$tmp']['splay_']['$tmp'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp'] = $lub($Γ['global']['$tmp']['splay_']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp.root_ = current;
    $Γ['global']['$tmp']['splay_']['$tmp']['root_'] = sec_lvl('current', null, false, $Γ['global']['$tmp']['splay_']);
    $Γ['global']['$tmp']['splay_']['$tmp']['root_'] instanceof Object ? $Γ['global']['$tmp']['splay_']['$tmp']['root_'].Σ = $lub($Γ['global']['$tmp']['splay_']['$tmp']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp']['splay_']['$tmp']['root_'] = $lub($Γ['global']['$tmp']['splay_']['$tmp']['root_'], $Λ[$Λ.length - 1].l);
};
$Γ['global']['$tmp']['splay_'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l
};
SplayTree.Node = function (key, value) {
    var $tmp;
    $Γ['global']['SplayTree']['Node']['$tmp'] = 0;
    $tmp = this;
    $Γ['global']['SplayTree']['Node']['$tmp'] = $Γ['global']['SplayTree']['Node'].this;
    $Γ['global']['SplayTree']['Node']['$tmp'] instanceof Object ? $Γ['global']['SplayTree']['Node']['$tmp'].Σ = $lub($Γ['global']['SplayTree']['Node']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTree']['Node']['$tmp'] = $lub($Γ['global']['SplayTree']['Node']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp.key = key;
    $Γ['global']['SplayTree']['Node']['$tmp']['key'] = sec_lvl('key', null, false, $Γ['global']['SplayTree']['Node']);
    $Γ['global']['SplayTree']['Node']['$tmp']['key'] instanceof Object ? $Γ['global']['SplayTree']['Node']['$tmp']['key'].Σ = $lub($Γ['global']['SplayTree']['Node']['$tmp']['key'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTree']['Node']['$tmp']['key'] = $lub($Γ['global']['SplayTree']['Node']['$tmp']['key'], $Λ[$Λ.length - 1].l);
    $tmp = this;
    $Γ['global']['SplayTree']['Node']['$tmp'] = $Γ['global']['SplayTree']['Node'].this;
    $Γ['global']['SplayTree']['Node']['$tmp'] instanceof Object ? $Γ['global']['SplayTree']['Node']['$tmp'].Σ = $lub($Γ['global']['SplayTree']['Node']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTree']['Node']['$tmp'] = $lub($Γ['global']['SplayTree']['Node']['$tmp'], $Λ[$Λ.length - 1].l);
    $tmp.value = value;
    $Γ['global']['SplayTree']['Node']['$tmp']['value'] = sec_lvl('value', null, false, $Γ['global']['SplayTree']['Node']);
    $Γ['global']['SplayTree']['Node']['$tmp']['value'] instanceof Object ? $Γ['global']['SplayTree']['Node']['$tmp']['value'].Σ = $lub($Γ['global']['SplayTree']['Node']['$tmp']['value'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTree']['Node']['$tmp']['value'] = $lub($Γ['global']['SplayTree']['Node']['$tmp']['value'], $Λ[$Λ.length - 1].l);
};
$Γ['global']['SplayTree']['Node'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    key: $Λ[$Λ.length - 1].l,
    value: $Λ[$Λ.length - 1].l
};
$tmp = SplayTree.Node;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp = $tmp.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.left = null;
$Γ['global']['$tmp']['left'] = $Λ[$Λ.length - 1].l;
$tmp = SplayTree.Node;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp = $tmp.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.right = null;
$Γ['global']['$tmp']['right'] = $Λ[$Λ.length - 1].l;
$tmp = SplayTree.Node;
$Γ['global']['$tmp'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp = $tmp.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.traverse_ = function (f) {
    var current;
    $Γ['global']['$tmp']['traverse_']['current'] = 0;
    current = this;
    $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = $Γ['global']['$tmp']['traverse_'].this;
    $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('current', null, true, $Γ['global']['$tmp']['traverse_'])),
        id: 'LOOP'
    });
    while (current) {
        var left, $tmp111;
        $Γ['global']['$tmp']['traverse_']['$tmp111'] = $Γ['global']['$tmp']['traverse_']['left'] = 0;
        left = current.left;
        $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['traverse_']);
        $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('left', null, true, $Γ['global']['$tmp']['traverse_'])),
            id: 'IF'
        });
        if (left) {
            var $tmp117;
            $Γ['global']['$tmp']['traverse_']['$tmp117'] = 0;
            $tmp117 = left.traverse_(f);
        } else {
            $upgrade([
                'left.traverse_',
                '$tmp117'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['traverse_']);
        }
        $Λ.pop();
        $tmp111 = f(current);
        current = current.right;
        $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['traverse_']);
        $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'left.traverse_',
        '$tmp117',
        'f',
        '$tmp111'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['traverse_']);
    $Λ.pop();
};
$Γ['global']['$tmp']['traverse_'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    f: $Λ[$Λ.length - 1].l
};
$rf = $scope($Γ['global'], 'SplaySetup', false)['SplaySetup'];
$rf.scope = $Γ['global'];
$rf.this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp0 = SplaySetup();
$Γ['global']['$tmp0'] = $Λ.pop().l;
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$rf = $scope($Γ['global'], 'SplayRun', false)['SplayRun'];
$rf.scope = $Γ['global'];
$rf.this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp1 = SplayRun();
$Γ['global']['$tmp1'] = $Λ.pop().l;
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$rf = $scope($Γ['global'], 'SplayTearDown', false)['SplayTearDown'];
$rf.scope = $Γ['global'];
$rf.this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp2 = SplayTearDown();
$Γ['global']['$tmp2'] = $Λ.pop().l;
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
