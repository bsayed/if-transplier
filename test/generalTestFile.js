
var req = require('fs');

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
    if(obj === 'this') {
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


var performance, kSplayTreeSize, kSplayTreeModifications, kSplayTreePayloadDepth, splayTree, splaySampleTimeStart, splaySamples, splaySumOfSquaredPauses, $tmp0, $tmp1, $tmp2, $tmp3, $tmp4;
$Γ['global']['$tmp4'] = $Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['splaySumOfSquaredPauses'] = $Γ['global']['splaySamples'] = $Γ['global']['splaySampleTimeStart'] = $Γ['global']['splayTree'] = $Γ['global']['kSplayTreePayloadDepth'] = $Γ['global']['kSplayTreeModifications'] = $Γ['global']['kSplayTreeSize'] = $Γ['global']['performance'] = 0;
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
    var $tmp5;
    $Γ['global']['GeneratePayloadTree']['$tmp5'] = 0;
    $tmp5 = depth == 0;
    $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
    $Γ['global']['GeneratePayloadTree']['$tmp5'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp5'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp5', null, true, $Γ['global']['GeneratePayloadTree'])),
        id: 'IF'
    });
    if ($tmp5) {
        $upgrade([
            '$tmp11',
            '$tmp13'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['GeneratePayloadTree']);
        var $tmp6, $tmp7, $tmp8, $tmp9;
        $Γ['global']['GeneratePayloadTree']['$tmp9'] = $Γ['global']['GeneratePayloadTree']['$tmp8'] = $Γ['global']['GeneratePayloadTree']['$tmp7'] = $Γ['global']['GeneratePayloadTree']['$tmp6'] = 0;
        $tmp7 = [
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
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp7'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp7'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = {
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
        $tmp9 = 'String for key ' + tag;
        $Γ['global']['GeneratePayloadTree']['$tmp9'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp9'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp9'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp9'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'], $Λ[$Λ.length - 1].l);
        $tmp8 = $tmp9 + ' in leaf node';
        $Γ['global']['GeneratePayloadTree']['$tmp8'] = $lub(sec_lvl('$tmp9', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp8'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp8'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp8'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'], $Λ[$Λ.length - 1].l);
        $tmp6 = {
            array: $tmp7,
            string: $tmp8
        };
        $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub(sec_lvl('$tmp7', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp8', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp6'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp6'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp6'] = {
            __proto__: {},
            array: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp7', null, true, $Γ['global']['GeneratePayloadTree'])),
            string: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp8', null, true, $Γ['global']['GeneratePayloadTree'])),
            Σ: $lub(sec_lvl('$tmp7', null, true, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp8', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp6')['$tmp6'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['GeneratePayloadTree'].InvokedAsContr) {
                $Γ['global']['GeneratePayloadTree'].$this.Σ = $lub($Γ['global']['GeneratePayloadTree'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['GeneratePayloadTree'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp6;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp10, $tmp11, $tmp12, $tmp13, $tmp14;
        $Γ['global']['GeneratePayloadTree']['$tmp14'] = $Γ['global']['GeneratePayloadTree']['$tmp13'] = $Γ['global']['GeneratePayloadTree']['$tmp12'] = $Γ['global']['GeneratePayloadTree']['$tmp11'] = $Γ['global']['GeneratePayloadTree']['$tmp10'] = 0;
        $tmp12 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp12'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp12'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp12'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp12'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp12'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.$this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp12', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp11 = GeneratePayloadTree($tmp12, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp11'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp11'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp11'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp11'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'], $Λ[$Λ.length - 1].l);
        $tmp14 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp14'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp14'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp14'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp14'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp14'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp14'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.$this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp14', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp13 = GeneratePayloadTree($tmp14, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp13'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp13'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp13'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp13'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp13'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp13'], $Λ[$Λ.length - 1].l);
        $tmp10 = {
            left: $tmp11,
            right: $tmp13
        };
        $Γ['global']['GeneratePayloadTree']['$tmp10'] = $lub(sec_lvl('$tmp11', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp13', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp10'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp10'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp10'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp10'] = {
            __proto__: {},
            left: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp11', null, true, $Γ['global']['GeneratePayloadTree'])),
            right: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp13', null, true, $Γ['global']['GeneratePayloadTree'])),
            Σ: $lub(sec_lvl('$tmp11', null, true, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp13', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp10')['$tmp10'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['GeneratePayloadTree'].InvokedAsContr) {
                $Γ['global']['GeneratePayloadTree'].$this.Σ = $lub($Γ['global']['GeneratePayloadTree'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['GeneratePayloadTree'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp10;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['GeneratePayloadTree'].InvokedAsContr) {
        $Γ['global']['GeneratePayloadTree'].$this.Σ = $lub($Γ['global']['GeneratePayloadTree'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['GeneratePayloadTree'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['GeneratePayloadTree'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    depth: $Λ[$Λ.length - 1].l,
    tag: $Λ[$Λ.length - 1].l
};
function GenerateKey() {
    var $tmp15;
    $Γ['global']['GenerateKey']['$tmp15'] = 0;
    $tmp15 = Math.random();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['GenerateKey'], '$tmp15')['$tmp15'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['GenerateKey'].InvokedAsContr) {
            $Γ['global']['GenerateKey'].$this.Σ = $lub($Γ['global']['GenerateKey'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['GenerateKey'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp15;
}
$Γ['global']['GenerateKey'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
splaySamples = 0;
$Γ['global']['splaySamples'] = $Λ[$Λ.length - 1].l;
splaySumOfSquaredPauses = 0;
$Γ['global']['splaySumOfSquaredPauses'] = $Λ[$Λ.length - 1].l;
function SplayRMS() {
    var $tmp16, $tmp17, $tmp18, $tmp19;
    $Γ['global']['SplayRMS']['$tmp19'] = $Γ['global']['SplayRMS']['$tmp18'] = $Γ['global']['SplayRMS']['$tmp17'] = $Γ['global']['SplayRMS']['$tmp16'] = 0;
    $tmp19 = splaySumOfSquaredPauses / splaySamples;
    $Γ['global']['SplayRMS']['$tmp19'] = $lub(sec_lvl('splaySumOfSquaredPauses', null, true, $Γ['global']['SplayRMS']), sec_lvl('splaySamples', null, true, $Γ['global']['SplayRMS']));
    $Γ['global']['SplayRMS']['$tmp19'] instanceof Object ? $Γ['global']['SplayRMS']['$tmp19'].Σ = $lub($Γ['global']['SplayRMS']['$tmp19'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRMS']['$tmp19'] = $lub($Γ['global']['SplayRMS']['$tmp19'], $Λ[$Λ.length - 1].l);
    $tmp18 = Math.sqrt($tmp19);
    $tmp17 = $tmp18 * 10000;
    $Γ['global']['SplayRMS']['$tmp17'] = $lub(sec_lvl('$tmp18', null, true, $Γ['global']['SplayRMS']), $Λ[$Λ.length - 1].l);
    $Γ['global']['SplayRMS']['$tmp17'] instanceof Object ? $Γ['global']['SplayRMS']['$tmp17'].Σ = $lub($Γ['global']['SplayRMS']['$tmp17'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRMS']['$tmp17'] = $lub($Γ['global']['SplayRMS']['$tmp17'], $Λ[$Λ.length - 1].l);
    $tmp16 = Math.round($tmp17);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['SplayRMS'], '$tmp16')['$tmp16'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['SplayRMS'].InvokedAsContr) {
            $Γ['global']['SplayRMS'].$this.Σ = $lub($Γ['global']['SplayRMS'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayRMS'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp16;
}
$Γ['global']['SplayRMS'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function SplayUpdateStats(time) {
    var pause, $tmp20;
    $Γ['global']['SplayUpdateStats']['$tmp20'] = $Γ['global']['SplayUpdateStats']['pause'] = 0;
    pause = time - splaySampleTimeStart;
    $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] = $lub(sec_lvl('time', null, true, $Γ['global']['SplayUpdateStats']), sec_lvl('splaySampleTimeStart', null, true, $Γ['global']['SplayUpdateStats']));
    $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'pause', true)['pause'], $Λ[$Λ.length - 1].l);
    splaySampleTimeStart = time;
    $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] = sec_lvl('time', null, false, $Γ['global']['SplayUpdateStats']);
    $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySampleTimeStart', true)['splaySampleTimeStart'], $Λ[$Λ.length - 1].l);
    $tmp20 = splaySamples++;
    $Γ['global']['SplayUpdateStats']['$tmp20'] = sec_lvl('splaySamples', null, false, $Γ['global']['SplayUpdateStats']);
    $Γ['global']['SplayUpdateStats']['$tmp20'] instanceof Object ? $Γ['global']['SplayUpdateStats']['$tmp20'].Σ = $lub($Γ['global']['SplayUpdateStats']['$tmp20'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayUpdateStats']['$tmp20'] = $lub($Γ['global']['SplayUpdateStats']['$tmp20'], $Λ[$Λ.length - 1].l);
    splaySumOfSquaredPauses += pause * pause;
    $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] = $lub(sec_lvl('pause', null, true, $Γ['global']['SplayUpdateStats']), sec_lvl('pause', null, true, $Γ['global']['SplayUpdateStats']));
    $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] instanceof Object ? $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'].Σ = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'] = $lub($scope($Γ['global']['SplayUpdateStats'], 'splaySumOfSquaredPauses', true)['splaySumOfSquaredPauses'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayUpdateStats'].InvokedAsContr) {
        $Γ['global']['SplayUpdateStats'].$this.Σ = $lub($Γ['global']['SplayUpdateStats'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayUpdateStats'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplayUpdateStats'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    time: $Λ[$Λ.length - 1].l
};
function InsertNewNode() {
    var key, $tmp21, payload, $tmp22, $tmp23;
    $Γ['global']['InsertNewNode']['$tmp23'] = $Γ['global']['InsertNewNode']['$tmp22'] = $Γ['global']['InsertNewNode']['payload'] = $Γ['global']['InsertNewNode']['$tmp21'] = $Γ['global']['InsertNewNode']['key'] = 0;
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp21', null, true, $Γ['global']['InsertNewNode'])),
        id: 'LOOP'
    });
    do {
        $rf = $scope($Γ['global']['InsertNewNode'], 'GenerateKey', false)['GenerateKey'];
        $rf.scope = $Γ['global']['InsertNewNode'];
        $rf.$this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        key = GenerateKey();
        $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] = $Λ.pop().l;
        $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] instanceof Object ? $scope($Γ['global']['InsertNewNode'], 'key', true)['key'].Σ = $lub($scope($Γ['global']['InsertNewNode'], 'key', true)['key'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['InsertNewNode'], 'key', true)['key'] = $lub($scope($Γ['global']['InsertNewNode'], 'key', true)['key'], $Λ[$Λ.length - 1].l);
        var $tmp21, $tmp24;
        $Γ['global']['InsertNewNode']['$tmp24'] = $Γ['global']['InsertNewNode']['$tmp21'] = 0;
        $tmp24 = splayTree.find(key);
        $tmp21 = $tmp24 != null;
        $Γ['global']['InsertNewNode']['$tmp21'] = $lub(sec_lvl('$tmp24', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
        $Γ['global']['InsertNewNode']['$tmp21'] instanceof Object ? $Γ['global']['InsertNewNode']['$tmp21'].Σ = $lub($Γ['global']['InsertNewNode']['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['InsertNewNode']['$tmp21'] = $lub($Γ['global']['InsertNewNode']['$tmp21'], $Λ[$Λ.length - 1].l);
    } while ($tmp21);
    $upgrade([
        'key',
        'splayTree.find',
        '$tmp24'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['InsertNewNode']);
    $Λ.pop();
    $tmp22 = String(key);
    $rf = $scope($Γ['global']['InsertNewNode'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
    $rf.scope = $Γ['global']['InsertNewNode'];
    $rf.$this = $Γ['global'];
    $rf['depth'] = $lub(sec_lvl('kSplayTreePayloadDepth', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
    $rf['tag'] = $lub(sec_lvl('$tmp22', null, true, $Γ['global']['InsertNewNode']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    payload = GeneratePayloadTree(kSplayTreePayloadDepth, $tmp22);
    $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] = $Λ.pop().l;
    $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] instanceof Object ? $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'].Σ = $lub($scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'] = $lub($scope($Γ['global']['InsertNewNode'], 'payload', true)['payload'], $Λ[$Λ.length - 1].l);
    $tmp23 = splayTree.insert(key, payload);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['InsertNewNode'], 'key')['key'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['InsertNewNode'].InvokedAsContr) {
            $Γ['global']['InsertNewNode'].$this.Σ = $lub($Γ['global']['InsertNewNode'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['InsertNewNode'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return key;
}
$Γ['global']['InsertNewNode'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function SplaySetup() {
    var $tmp25, $tmp26, i, $tmp28;
    $Γ['global']['SplaySetup']['$tmp28'] = $Γ['global']['SplaySetup']['i'] = $Γ['global']['SplaySetup']['$tmp26'] = $Γ['global']['SplaySetup']['$tmp25'] = 0;
    $tmp26 = performance.now;
    $Γ['global']['SplaySetup']['$tmp26'] = sec_lvl('performance', 'now', false, $Γ['global']['SplaySetup']);
    $Γ['global']['SplaySetup']['$tmp26'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp26'].Σ = $lub($Γ['global']['SplaySetup']['$tmp26'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp26'] = $lub($Γ['global']['SplaySetup']['$tmp26'], $Λ[$Λ.length - 1].l);
    $tmp25 = !$tmp26;
    $Γ['global']['SplaySetup']['$tmp25'] = sec_lvl('$tmp26', null, false, $Γ['global']['SplaySetup']);
    $Γ['global']['SplaySetup']['$tmp25'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp25'].Σ = $lub($Γ['global']['SplaySetup']['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp25'] = $lub($Γ['global']['SplaySetup']['$tmp25'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp25', null, true, $Γ['global']['SplaySetup'])),
        id: 'IF'
    });
    if ($tmp25) {
        var $tmp29;
        $Γ['global']['SplaySetup']['$tmp29'] = 0;
        $tmp29 = 'PerformanceNowUnsupported';
        $Γ['global']['SplaySetup']['$tmp29'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp29', null, true, $Γ['global']['SplaySetup'])) };
        throw $tmp29;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $scope($Γ['global']['SplaySetup'], 'SplayTree', false)['SplayTree'];
    $rf.scope = $Γ['global']['SplaySetup'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
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
    $tmp28 = i < kSplayTreeSize;
    $Γ['global']['SplaySetup']['$tmp28'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplaySetup']));
    $Γ['global']['SplaySetup']['$tmp28'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp28'].Σ = $lub($Γ['global']['SplaySetup']['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp28'] = $lub($Γ['global']['SplaySetup']['$tmp28'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp28', null, true, $Γ['global']['SplaySetup'])),
        id: 'LOOP'
    });
    for (; $tmp28;) {
        var $tmp30, $tmp31, $tmp32, $tmp33, $tmp27, $tmp28;
        $Γ['global']['SplaySetup']['$tmp28'] = $Γ['global']['SplaySetup']['$tmp27'] = $Γ['global']['SplaySetup']['$tmp33'] = $Γ['global']['SplaySetup']['$tmp32'] = $Γ['global']['SplaySetup']['$tmp31'] = $Γ['global']['SplaySetup']['$tmp30'] = 0;
        $rf = $scope($Γ['global']['SplaySetup'], 'InsertNewNode', false)['InsertNewNode'];
        $rf.scope = $Γ['global']['SplaySetup'];
        $rf.$this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp30 = InsertNewNode();
        $Γ['global']['SplaySetup']['$tmp30'] = $Λ.pop().l;
        $Γ['global']['SplaySetup']['$tmp30'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp30'].Σ = $lub($Γ['global']['SplaySetup']['$tmp30'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp30'] = $lub($Γ['global']['SplaySetup']['$tmp30'], $Λ[$Λ.length - 1].l);
        $tmp33 = i + 1;
        $Γ['global']['SplaySetup']['$tmp33'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp33'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp33'].Σ = $lub($Γ['global']['SplaySetup']['$tmp33'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp33'] = $lub($Γ['global']['SplaySetup']['$tmp33'], $Λ[$Λ.length - 1].l);
        $tmp32 = $tmp33 % 20;
        $Γ['global']['SplaySetup']['$tmp32'] = $lub(sec_lvl('$tmp33', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp32'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp32'].Σ = $lub($Γ['global']['SplaySetup']['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp32'] = $lub($Γ['global']['SplaySetup']['$tmp32'], $Λ[$Λ.length - 1].l);
        $tmp31 = $tmp32 == 19;
        $Γ['global']['SplaySetup']['$tmp31'] = $lub(sec_lvl('$tmp32', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplaySetup']['$tmp31'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp31'].Σ = $lub($Γ['global']['SplaySetup']['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp31'] = $lub($Γ['global']['SplaySetup']['$tmp31'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp31', null, true, $Γ['global']['SplaySetup'])),
            id: 'IF'
        });
        if ($tmp31) {
            var $tmp34, $tmp35;
            $Γ['global']['SplaySetup']['$tmp35'] = $Γ['global']['SplaySetup']['$tmp34'] = 0;
            $tmp35 = performance.now();
            $rf = $scope($Γ['global']['SplaySetup'], 'SplayUpdateStats', false)['SplayUpdateStats'];
            $rf.scope = $Γ['global']['SplaySetup'];
            $rf.$this = $Γ['global'];
            $rf['time'] = $lub(sec_lvl('$tmp35', null, true, $Γ['global']['SplaySetup']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp34 = SplayUpdateStats($tmp35);
            $Γ['global']['SplaySetup']['$tmp34'] = $Λ.pop().l;
            $Γ['global']['SplaySetup']['$tmp34'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp34'].Σ = $lub($Γ['global']['SplaySetup']['$tmp34'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp34'] = $lub($Γ['global']['SplaySetup']['$tmp34'], $Λ[$Λ.length - 1].l);
        } else {
            $upgrade([
                'performance.now',
                '$tmp35',
                '$tmp34'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplaySetup']);
        }
        $Λ.pop();
        $tmp27 = i++;
        $Γ['global']['SplaySetup']['$tmp27'] = sec_lvl('i', null, false, $Γ['global']['SplaySetup']);
        $Γ['global']['SplaySetup']['$tmp27'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp27'].Σ = $lub($Γ['global']['SplaySetup']['$tmp27'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp27'] = $lub($Γ['global']['SplaySetup']['$tmp27'], $Λ[$Λ.length - 1].l);
        $tmp28 = i < kSplayTreeSize;
        $Γ['global']['SplaySetup']['$tmp28'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplaySetup']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplaySetup']));
        $Γ['global']['SplaySetup']['$tmp28'] instanceof Object ? $Γ['global']['SplaySetup']['$tmp28'].Σ = $lub($Γ['global']['SplaySetup']['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplaySetup']['$tmp28'] = $lub($Γ['global']['SplaySetup']['$tmp28'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        '$tmp30',
        'performance.now',
        '$tmp35',
        '$tmp34'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplaySetup']);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplaySetup'].InvokedAsContr) {
        $Γ['global']['SplaySetup'].$this.Σ = $lub($Γ['global']['SplaySetup'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplaySetup'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplaySetup'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function SplayTearDown() {
    var keys, length, $tmp36, i, $tmp38, $tmp39;
    $Γ['global']['SplayTearDown']['$tmp39'] = $Γ['global']['SplayTearDown']['$tmp38'] = $Γ['global']['SplayTearDown']['i'] = $Γ['global']['SplayTearDown']['$tmp36'] = $Γ['global']['SplayTearDown']['length'] = $Γ['global']['SplayTearDown']['keys'] = 0;
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
    $tmp36 = length != kSplayTreeSize;
    $Γ['global']['SplayTearDown']['$tmp36'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), sec_lvl('kSplayTreeSize', null, true, $Γ['global']['SplayTearDown']));
    $Γ['global']['SplayTearDown']['$tmp36'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp36'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp36'] = $lub($Γ['global']['SplayTearDown']['$tmp36'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp36', null, true, $Γ['global']['SplayTearDown'])),
        id: 'IF'
    });
    if ($tmp36) {
        var $tmp40;
        $Γ['global']['SplayTearDown']['$tmp40'] = 0;
        $tmp40 = new Error('Splay tree has wrong size');
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp40', null, true, $Γ['global']['SplayTearDown'])) };
        throw $tmp40;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp40'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    i = 0;
    $scope($Γ['global']['SplayTearDown'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp39 = length - 1;
    $Γ['global']['SplayTearDown']['$tmp39'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
    $Γ['global']['SplayTearDown']['$tmp39'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp39'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp39'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp39'] = $lub($Γ['global']['SplayTearDown']['$tmp39'], $Λ[$Λ.length - 1].l);
    $tmp38 = i < $tmp39;
    $Γ['global']['SplayTearDown']['$tmp38'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp39', null, true, $Γ['global']['SplayTearDown']));
    $Γ['global']['SplayTearDown']['$tmp38'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp38'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp38'] = $lub($Γ['global']['SplayTearDown']['$tmp38'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp38', null, true, $Γ['global']['SplayTearDown'])),
        id: 'LOOP'
    });
    for (; $tmp38;) {
        var $tmp41, $tmp42, $tmp43, $tmp44, $tmp37, $tmp38, $tmp45;
        $Γ['global']['SplayTearDown']['$tmp45'] = $Γ['global']['SplayTearDown']['$tmp38'] = $Γ['global']['SplayTearDown']['$tmp37'] = $Γ['global']['SplayTearDown']['$tmp44'] = $Γ['global']['SplayTearDown']['$tmp43'] = $Γ['global']['SplayTearDown']['$tmp42'] = $Γ['global']['SplayTearDown']['$tmp41'] = 0;
        $tmp42 = keys[i];
        $Γ['global']['SplayTearDown']['$tmp42'] = sec_lvl('keys', i, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp42'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp42'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp42'] = $lub($Γ['global']['SplayTearDown']['$tmp42'], $Λ[$Λ.length - 1].l);
        $tmp44 = i + 1;
        $Γ['global']['SplayTearDown']['$tmp44'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayTearDown']['$tmp44'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp44'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp44'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp44'] = $lub($Γ['global']['SplayTearDown']['$tmp44'], $Λ[$Λ.length - 1].l);
        $tmp43 = keys[$tmp44];
        $Γ['global']['SplayTearDown']['$tmp43'] = sec_lvl('keys', $tmp44, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp43'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp43'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp43'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp43'] = $lub($Γ['global']['SplayTearDown']['$tmp43'], $Λ[$Λ.length - 1].l);
        $tmp41 = $tmp42 >= $tmp43;
        $Γ['global']['SplayTearDown']['$tmp41'] = $lub(sec_lvl('$tmp42', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp43', null, true, $Γ['global']['SplayTearDown']));
        $Γ['global']['SplayTearDown']['$tmp41'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp41'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp41'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp41'] = $lub($Γ['global']['SplayTearDown']['$tmp41'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp41', null, true, $Γ['global']['SplayTearDown'])),
            id: 'IF'
        });
        if ($tmp41) {
            var $tmp46;
            $Γ['global']['SplayTearDown']['$tmp46'] = 0;
            $tmp46 = new Error('Splay tree not sorted');
            $old_pc = $pc();
            while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
                $Λ.pop();
            }
            $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp46', null, true, $Γ['global']['SplayTearDown'])) };
            throw $tmp46;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
            $upgrade([
                'Error',
                '$tmp46'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
        $tmp37 = i++;
        $Γ['global']['SplayTearDown']['$tmp37'] = sec_lvl('i', null, false, $Γ['global']['SplayTearDown']);
        $Γ['global']['SplayTearDown']['$tmp37'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp37'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp37'] = $lub($Γ['global']['SplayTearDown']['$tmp37'], $Λ[$Λ.length - 1].l);
        $tmp45 = length - 1;
        $Γ['global']['SplayTearDown']['$tmp45'] = $lub(sec_lvl('length', null, true, $Γ['global']['SplayTearDown']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayTearDown']['$tmp45'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp45'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp45'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp45'] = $lub($Γ['global']['SplayTearDown']['$tmp45'], $Λ[$Λ.length - 1].l);
        $tmp38 = i < $tmp45;
        $Γ['global']['SplayTearDown']['$tmp38'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayTearDown']), sec_lvl('$tmp45', null, true, $Γ['global']['SplayTearDown']));
        $Γ['global']['SplayTearDown']['$tmp38'] instanceof Object ? $Γ['global']['SplayTearDown']['$tmp38'].Σ = $lub($Γ['global']['SplayTearDown']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayTearDown']['$tmp38'] = $lub($Γ['global']['SplayTearDown']['$tmp38'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'Error',
        '$tmp46'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayTearDown']);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayTearDown'].InvokedAsContr) {
        $Γ['global']['SplayTearDown'].$this.Σ = $lub($Γ['global']['SplayTearDown'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayTearDown'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplayTearDown'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function SplayRun() {
    var i, $tmp48, $tmp49, $tmp50;
    $Γ['global']['SplayRun']['$tmp50'] = $Γ['global']['SplayRun']['$tmp49'] = $Γ['global']['SplayRun']['$tmp48'] = $Γ['global']['SplayRun']['i'] = 0;
    i = 0;
    $scope($Γ['global']['SplayRun'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
    $tmp48 = i < kSplayTreeModifications;
    $Γ['global']['SplayRun']['$tmp48'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayRun']), sec_lvl('kSplayTreeModifications', null, true, $Γ['global']['SplayRun']));
    $Γ['global']['SplayRun']['$tmp48'] instanceof Object ? $Γ['global']['SplayRun']['$tmp48'].Σ = $lub($Γ['global']['SplayRun']['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp48'] = $lub($Γ['global']['SplayRun']['$tmp48'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp48', null, true, $Γ['global']['SplayRun'])),
        id: 'LOOP'
    });
    for (; $tmp48;) {
        var key, greatest, $tmp51, $tmp47, $tmp48;
        $Γ['global']['SplayRun']['$tmp48'] = $Γ['global']['SplayRun']['$tmp47'] = $Γ['global']['SplayRun']['$tmp51'] = $Γ['global']['SplayRun']['greatest'] = $Γ['global']['SplayRun']['key'] = 0;
        $rf = $scope($Γ['global']['SplayRun'], 'InsertNewNode', false)['InsertNewNode'];
        $rf.scope = $Γ['global']['SplayRun'];
        $rf.$this = $Γ['global'];
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        key = InsertNewNode();
        $scope($Γ['global']['SplayRun'], 'key', true)['key'] = $Λ.pop().l;
        $scope($Γ['global']['SplayRun'], 'key', true)['key'] instanceof Object ? $scope($Γ['global']['SplayRun'], 'key', true)['key'].Σ = $lub($scope($Γ['global']['SplayRun'], 'key', true)['key'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayRun'], 'key', true)['key'] = $lub($scope($Γ['global']['SplayRun'], 'key', true)['key'], $Λ[$Λ.length - 1].l);
        greatest = splayTree.findGreatestLessThan(key);
        $tmp51 = greatest == null;
        $Γ['global']['SplayRun']['$tmp51'] = $lub(sec_lvl('greatest', null, true, $Γ['global']['SplayRun']), $Λ[$Λ.length - 1].l);
        $Γ['global']['SplayRun']['$tmp51'] instanceof Object ? $Γ['global']['SplayRun']['$tmp51'].Σ = $lub($Γ['global']['SplayRun']['$tmp51'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp51'] = $lub($Γ['global']['SplayRun']['$tmp51'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp51', null, true, $Γ['global']['SplayRun'])),
            id: 'IF'
        });
        if ($tmp51) {
            $upgrade([
                'splayTree.remove',
                '$tmp53'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
            var $tmp52;
            $Γ['global']['SplayRun']['$tmp52'] = 0;
            $tmp52 = splayTree.remove(key);
        } else {
            $upgrade([
                'splayTree.remove',
                '$tmp52'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
            var $tmp53, $tmp54;
            $Γ['global']['SplayRun']['$tmp54'] = $Γ['global']['SplayRun']['$tmp53'] = 0;
            $tmp54 = greatest.key;
            $Γ['global']['SplayRun']['$tmp54'] = sec_lvl('greatest', 'key', false, $Γ['global']['SplayRun']);
            $Γ['global']['SplayRun']['$tmp54'] instanceof Object ? $Γ['global']['SplayRun']['$tmp54'].Σ = $lub($Γ['global']['SplayRun']['$tmp54'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp54'] = $lub($Γ['global']['SplayRun']['$tmp54'], $Λ[$Λ.length - 1].l);
            $tmp53 = splayTree.remove($tmp54);
        }
        $Λ.pop();
        $tmp47 = i++;
        $Γ['global']['SplayRun']['$tmp47'] = sec_lvl('i', null, false, $Γ['global']['SplayRun']);
        $Γ['global']['SplayRun']['$tmp47'] instanceof Object ? $Γ['global']['SplayRun']['$tmp47'].Σ = $lub($Γ['global']['SplayRun']['$tmp47'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp47'] = $lub($Γ['global']['SplayRun']['$tmp47'], $Λ[$Λ.length - 1].l);
        $tmp48 = i < kSplayTreeModifications;
        $Γ['global']['SplayRun']['$tmp48'] = $lub(sec_lvl('i', null, true, $Γ['global']['SplayRun']), sec_lvl('kSplayTreeModifications', null, true, $Γ['global']['SplayRun']));
        $Γ['global']['SplayRun']['$tmp48'] instanceof Object ? $Γ['global']['SplayRun']['$tmp48'].Σ = $lub($Γ['global']['SplayRun']['$tmp48'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp48'] = $lub($Γ['global']['SplayRun']['$tmp48'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'key',
        'splayTree.findGreatestLessThan',
        'greatest',
        'splayTree.remove',
        '$tmp52',
        '$tmp53'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['SplayRun']);
    $Λ.pop();
    $tmp50 = performance.now();
    $rf = $scope($Γ['global']['SplayRun'], 'SplayUpdateStats', false)['SplayUpdateStats'];
    $rf.scope = $Γ['global']['SplayRun'];
    $rf.$this = $Γ['global'];
    $rf['time'] = $lub(sec_lvl('$tmp50', null, true, $Γ['global']['SplayRun']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp49 = SplayUpdateStats($tmp50);
    $Γ['global']['SplayRun']['$tmp49'] = $Λ.pop().l;
    $Γ['global']['SplayRun']['$tmp49'] instanceof Object ? $Γ['global']['SplayRun']['$tmp49'].Σ = $lub($Γ['global']['SplayRun']['$tmp49'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['SplayRun']['$tmp49'] = $lub($Γ['global']['SplayRun']['$tmp49'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayRun'].InvokedAsContr) {
        $Γ['global']['SplayRun'].$this.Σ = $lub($Γ['global']['SplayRun'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayRun'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplayRun'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function SplayTree() {
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayTree'].InvokedAsContr) {
        $Γ['global']['SplayTree'].$this.Σ = $lub($Γ['global']['SplayTree'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayTree'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplayTree'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.root_ = null;
$Γ['global']['$tmp0']['root_'] = $Λ[$Λ.length - 1].l;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.isEmpty = function () {
    var $tmp55, $tmp56;
    $Γ['global']['$tmp0']['isEmpty']['$tmp56'] = $Γ['global']['$tmp0']['isEmpty']['$tmp55'] = 0;
    $tmp56 = this.root_;
    $Γ['global']['$tmp0']['isEmpty']['$tmp56'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['isEmpty']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp56'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp56'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp56'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp56'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp56'], $Λ[$Λ.length - 1].l);
    $tmp55 = !$tmp56;
    $Γ['global']['$tmp0']['isEmpty']['$tmp55'] = sec_lvl('$tmp56', null, false, $Γ['global']['$tmp0']['isEmpty']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp55'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp55'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp55'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp55'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp55'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['isEmpty'], '$tmp55')['$tmp55'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['isEmpty'].InvokedAsContr) {
            $Γ['global']['$tmp0']['isEmpty'].$this.Σ = $lub($Γ['global']['$tmp0']['isEmpty'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['isEmpty'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp55;
};
$Γ['global']['$tmp0']['isEmpty'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.insert = function (key, value) {
    var $tmp57, $tmp58, $tmp59, $tmp60, $tmp61, node, $tmp62, $tmp63;
    $Γ['global']['$tmp0']['insert']['$tmp63'] = $Γ['global']['$tmp0']['insert']['$tmp62'] = $Γ['global']['$tmp0']['insert']['node'] = $Γ['global']['$tmp0']['insert']['$tmp61'] = $Γ['global']['$tmp0']['insert']['$tmp60'] = $Γ['global']['$tmp0']['insert']['$tmp59'] = $Γ['global']['$tmp0']['insert']['$tmp58'] = $Γ['global']['$tmp0']['insert']['$tmp57'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['insert']);
    $rf.scope = $Γ['global']['$tmp0']['insert'];
    $rf.$this = $Γ['global']['$tmp0']['insert']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp57 = this.isEmpty();
    $Γ['global']['$tmp0']['insert']['$tmp57'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['insert']['$tmp57'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp57'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp57'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp57'] = $lub($Γ['global']['$tmp0']['insert']['$tmp57'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp57', null, true, $Γ['global']['$tmp0']['insert'])),
        id: 'IF'
    });
    if ($tmp57) {
        $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp0']['insert']);
        $rf.scope = $Γ['global']['$tmp0']['insert'];
        $rf.$this = {
            Σ: $Λ[$Λ.length - 1].l,
            __$proto__: $rf.prototype
        };
        $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['insert']), $Λ[$Λ.length - 1].l);
        $rf['value'] = $lub(sec_lvl('value', null, true, $Γ['global']['$tmp0']['insert']), $Λ[$Λ.length - 1].l);
        $rf.InvokedAsContr = true;
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        this.root_ = new SplayTree.Node(key, value);
        $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] = $Λ.pop().l;
        $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp0']['root_'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp0']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] = $lub($Γ['global']['$tmp0']['insert']['$tmp0']['root_'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp0']['insert'].InvokedAsContr) {
            $Γ['global']['$tmp0']['insert'].$this.Σ = $lub($Γ['global']['$tmp0']['insert'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['insert'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['insert']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('$tmp0', 'splay_', $Γ['global']['$tmp0']['insert']);
    $rf.scope = $Γ['global']['$tmp0']['insert'];
    $rf.$this = $Γ['global']['$tmp0']['insert']['$tmp0'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['insert']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp58 = this.splay_(key);
    $Γ['global']['$tmp0']['insert']['$tmp58'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['insert']['$tmp58'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp58'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp58'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp58'] = $lub($Γ['global']['$tmp0']['insert']['$tmp58'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
    $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp60 = $tmp61.key;
    $Γ['global']['$tmp0']['insert']['$tmp60'] = sec_lvl('$tmp61', 'key', false, $Γ['global']['$tmp0']['insert']);
    $Γ['global']['$tmp0']['insert']['$tmp60'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp60'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp60'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp60'] = $lub($Γ['global']['$tmp0']['insert']['$tmp60'], $Λ[$Λ.length - 1].l);
    $tmp59 = $tmp60 == key;
    $Γ['global']['$tmp0']['insert']['$tmp59'] = $lub(sec_lvl('$tmp60', null, true, $Γ['global']['$tmp0']['insert']), sec_lvl('key', null, true, $Γ['global']['$tmp0']['insert']));
    $Γ['global']['$tmp0']['insert']['$tmp59'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp59'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp59'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp59'] = $lub($Γ['global']['$tmp0']['insert']['$tmp59'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp59', null, true, $Γ['global']['$tmp0']['insert'])),
        id: 'IF'
    });
    if ($tmp59) {
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp0']['insert'].InvokedAsContr) {
            $Γ['global']['$tmp0']['insert'].$this.Σ = $lub($Γ['global']['$tmp0']['insert'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['insert'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp0']['insert']);
    $rf.scope = $Γ['global']['$tmp0']['insert'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['insert']), $Λ[$Λ.length - 1].l);
    $rf['value'] = $lub(sec_lvl('value', null, true, $Γ['global']['$tmp0']['insert']), $Λ[$Λ.length - 1].l);
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    node = new SplayTree.Node(key, value);
    $scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'] = $Λ.pop().l;
    $scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'] instanceof Object ? $scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'].Σ = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'] = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', true)['node'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
    $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp63 = $tmp61.key;
    $Γ['global']['$tmp0']['insert']['$tmp63'] = sec_lvl('$tmp61', 'key', false, $Γ['global']['$tmp0']['insert']);
    $Γ['global']['$tmp0']['insert']['$tmp63'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp63'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp63'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp63'] = $lub($Γ['global']['$tmp0']['insert']['$tmp63'], $Λ[$Λ.length - 1].l);
    $tmp62 = key > $tmp63;
    $Γ['global']['$tmp0']['insert']['$tmp62'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['insert']), sec_lvl('$tmp63', null, true, $Γ['global']['$tmp0']['insert']));
    $Γ['global']['$tmp0']['insert']['$tmp62'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp62'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp62'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp62'] = $lub($Γ['global']['$tmp0']['insert']['$tmp62'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp62', null, true, $Γ['global']['$tmp0']['insert'])),
        id: 'IF'
    });
    if ($tmp62) {
        node.left = this.root_;
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'], $Λ[$Λ.length - 1].l);
        var $tmp61;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
        node.right = $tmp61.right;
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] = sec_lvl('$tmp61', 'right', false, $Γ['global']['$tmp0']['insert']);
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'], $Λ[$Λ.length - 1].l);
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp61.right = null;
        $Γ['global']['$tmp0']['insert']['$tmp61']['right'] = $Λ[$Λ.length - 1].l;
    } else {
        node.right = this.root_;
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'] = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['right'], $Λ[$Λ.length - 1].l);
        var $tmp61;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
        node.left = $tmp61.left;
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] = sec_lvl('$tmp61', 'left', false, $Γ['global']['$tmp0']['insert']);
        $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'] = $lub($scope($Γ['global']['$tmp0']['insert'], 'node', false)['left'], $Λ[$Λ.length - 1].l);
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['insert']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['insert']);
        $Γ['global']['$tmp0']['insert']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp61'] = $lub($Γ['global']['$tmp0']['insert']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp61.left = null;
        $Γ['global']['$tmp0']['insert']['$tmp61']['left'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    this.root_ = node;
    $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] = sec_lvl('node', null, false, $Γ['global']['$tmp0']['insert']);
    $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] instanceof Object ? $Γ['global']['$tmp0']['insert']['$tmp0']['root_'].Σ = $lub($Γ['global']['$tmp0']['insert']['$tmp0']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['insert']['$tmp0']['root_'] = $lub($Γ['global']['$tmp0']['insert']['$tmp0']['root_'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['$tmp0']['insert'].InvokedAsContr) {
        $Γ['global']['$tmp0']['insert'].$this.Σ = $lub($Γ['global']['$tmp0']['insert'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['insert'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
};
$Γ['global']['$tmp0']['insert'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l,
    value: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.remove = function (key) {
    var $tmp64, $tmp65, $tmp66, $tmp67, $tmp61, removed, $tmp68, $tmp69;
    $Γ['global']['$tmp0']['remove']['$tmp69'] = $Γ['global']['$tmp0']['remove']['$tmp68'] = $Γ['global']['$tmp0']['remove']['removed'] = $Γ['global']['$tmp0']['remove']['$tmp61'] = $Γ['global']['$tmp0']['remove']['$tmp67'] = $Γ['global']['$tmp0']['remove']['$tmp66'] = $Γ['global']['$tmp0']['remove']['$tmp65'] = $Γ['global']['$tmp0']['remove']['$tmp64'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['remove']);
    $rf.scope = $Γ['global']['$tmp0']['remove'];
    $rf.$this = $Γ['global']['$tmp0']['remove']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp64 = this.isEmpty();
    $Γ['global']['$tmp0']['remove']['$tmp64'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['remove']['$tmp64'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp64'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp64'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp64'] = $lub($Γ['global']['$tmp0']['remove']['$tmp64'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp64', null, true, $Γ['global']['$tmp0']['remove'])),
        id: 'IF'
    });
    if ($tmp64) {
        var $tmp70, $tmp71;
        $Γ['global']['$tmp0']['remove']['$tmp71'] = $Γ['global']['$tmp0']['remove']['$tmp70'] = 0;
        $tmp71 = 'Key not found: ' + key;
        $Γ['global']['$tmp0']['remove']['$tmp71'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('key', null, true, $Γ['global']['$tmp0']['remove']));
        $Γ['global']['$tmp0']['remove']['$tmp71'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp71'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp71'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp71'] = $lub($Γ['global']['$tmp0']['remove']['$tmp71'], $Λ[$Λ.length - 1].l);
        $tmp70 = Error($tmp71);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp70', null, true, $Γ['global']['$tmp0']['remove'])) };
        throw $tmp70;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp70'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['remove']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('$tmp0', 'splay_', $Γ['global']['$tmp0']['remove']);
    $rf.scope = $Γ['global']['$tmp0']['remove'];
    $rf.$this = $Γ['global']['$tmp0']['remove']['$tmp0'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['remove']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp65 = this.splay_(key);
    $Γ['global']['$tmp0']['remove']['$tmp65'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['remove']['$tmp65'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp65'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp65'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp65'] = $lub($Γ['global']['$tmp0']['remove']['$tmp65'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
    $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp67 = $tmp61.key;
    $Γ['global']['$tmp0']['remove']['$tmp67'] = sec_lvl('$tmp61', 'key', false, $Γ['global']['$tmp0']['remove']);
    $Γ['global']['$tmp0']['remove']['$tmp67'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp67'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp67'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp67'] = $lub($Γ['global']['$tmp0']['remove']['$tmp67'], $Λ[$Λ.length - 1].l);
    $tmp66 = $tmp67 != key;
    $Γ['global']['$tmp0']['remove']['$tmp66'] = $lub(sec_lvl('$tmp67', null, true, $Γ['global']['$tmp0']['remove']), sec_lvl('key', null, true, $Γ['global']['$tmp0']['remove']));
    $Γ['global']['$tmp0']['remove']['$tmp66'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp66'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp66'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp66'] = $lub($Γ['global']['$tmp0']['remove']['$tmp66'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp66', null, true, $Γ['global']['$tmp0']['remove'])),
        id: 'IF'
    });
    if ($tmp66) {
        var $tmp72, $tmp73;
        $Γ['global']['$tmp0']['remove']['$tmp73'] = $Γ['global']['$tmp0']['remove']['$tmp72'] = 0;
        $tmp73 = 'Key not found: ' + key;
        $Γ['global']['$tmp0']['remove']['$tmp73'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('key', null, true, $Γ['global']['$tmp0']['remove']));
        $Γ['global']['$tmp0']['remove']['$tmp73'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp73'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp73'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp73'] = $lub($Γ['global']['$tmp0']['remove']['$tmp73'], $Λ[$Λ.length - 1].l);
        $tmp72 = Error($tmp73);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp72', null, true, $Γ['global']['$tmp0']['remove'])) };
        throw $tmp72;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            'Error',
            '$tmp72'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['remove']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    removed = this.root_;
    $scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
    $scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'] instanceof Object ? $scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'].Σ = $lub($scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'] = $lub($scope($Γ['global']['$tmp0']['remove'], 'removed', true)['removed'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
    $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp69 = $tmp61.left;
    $Γ['global']['$tmp0']['remove']['$tmp69'] = sec_lvl('$tmp61', 'left', false, $Γ['global']['$tmp0']['remove']);
    $Γ['global']['$tmp0']['remove']['$tmp69'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp69'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp69'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp69'] = $lub($Γ['global']['$tmp0']['remove']['$tmp69'], $Λ[$Λ.length - 1].l);
    $tmp68 = !$tmp69;
    $Γ['global']['$tmp0']['remove']['$tmp68'] = sec_lvl('$tmp69', null, false, $Γ['global']['$tmp0']['remove']);
    $Γ['global']['$tmp0']['remove']['$tmp68'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp68'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp68'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp68'] = $lub($Γ['global']['$tmp0']['remove']['$tmp68'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp68', null, true, $Γ['global']['$tmp0']['remove'])),
        id: 'IF'
    });
    if ($tmp68) {
        $upgrade(['$tmp74'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['remove']);
        var $tmp61;
        $Γ['global']['$tmp0']['remove']['$tmp61'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
        this.root_ = $tmp61.right;
        $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] = sec_lvl('$tmp61', 'right', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp0']['root_'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp0']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] = $lub($Γ['global']['$tmp0']['remove']['$tmp0']['root_'], $Λ[$Λ.length - 1].l);
    } else {
        var right, $tmp61, $tmp74;
        $Γ['global']['$tmp0']['remove']['$tmp74'] = $Γ['global']['$tmp0']['remove']['$tmp61'] = $Γ['global']['$tmp0']['remove']['right'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
        right = $tmp61.right;
        $scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'] = sec_lvl('$tmp61', 'right', false, $Γ['global']['$tmp0']['remove']);
        $scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp0']['remove'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
        this.root_ = $tmp61.left;
        $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] = sec_lvl('$tmp61', 'left', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp0']['root_'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp0']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp0']['root_'] = $lub($Γ['global']['$tmp0']['remove']['$tmp0']['root_'], $Λ[$Λ.length - 1].l);
        $rf = $prop('$tmp0', 'splay_', $Γ['global']['$tmp0']['remove']);
        $rf.scope = $Γ['global']['$tmp0']['remove'];
        $rf.$this = $Γ['global']['$tmp0']['remove']['$tmp0'];
        $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['remove']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp74 = this.splay_(key);
        $Γ['global']['$tmp0']['remove']['$tmp74'] = $Λ.pop().l;
        $Γ['global']['$tmp0']['remove']['$tmp74'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp74'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp74'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp74'] = $lub($Γ['global']['$tmp0']['remove']['$tmp74'], $Λ[$Λ.length - 1].l);
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['remove']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp61.right = right;
        $Γ['global']['$tmp0']['remove']['$tmp61']['right'] = sec_lvl('right', null, false, $Γ['global']['$tmp0']['remove']);
        $Γ['global']['$tmp0']['remove']['$tmp61']['right'] instanceof Object ? $Γ['global']['$tmp0']['remove']['$tmp61']['right'].Σ = $lub($Γ['global']['$tmp0']['remove']['$tmp61']['right'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['remove']['$tmp61']['right'] = $lub($Γ['global']['$tmp0']['remove']['$tmp61']['right'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['remove'], 'removed')['removed'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['remove'].InvokedAsContr) {
            $Γ['global']['$tmp0']['remove'].$this.Σ = $lub($Γ['global']['$tmp0']['remove'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['remove'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return removed;
};
$Γ['global']['$tmp0']['remove'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.find = function (key) {
    var $tmp75, $tmp76, $tmp77, $tmp115, $tmp116, $tmp61;
    $Γ['global']['$tmp0']['find']['$tmp61'] = $Γ['global']['$tmp0']['find']['$tmp116'] = $Γ['global']['$tmp0']['find']['$tmp115'] = $Γ['global']['$tmp0']['find']['$tmp77'] = $Γ['global']['$tmp0']['find']['$tmp76'] = $Γ['global']['$tmp0']['find']['$tmp75'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['find']);
    $rf.scope = $Γ['global']['$tmp0']['find'];
    $rf.$this = $Γ['global']['$tmp0']['find']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp75 = this.isEmpty();
    $Γ['global']['$tmp0']['find']['$tmp75'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['find']['$tmp75'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp75'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp75'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp75'] = $lub($Γ['global']['$tmp0']['find']['$tmp75'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp75', null, true, $Γ['global']['$tmp0']['find'])),
        id: 'IF'
    });
    if ($tmp75) {
        var $tmp78;
        $Γ['global']['$tmp0']['find']['$tmp78'] = 0;
        $tmp78 = null;
        $Γ['global']['$tmp0']['find']['$tmp78'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp0']['find'], '$tmp78')['$tmp78'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp0']['find'].InvokedAsContr) {
                $Γ['global']['$tmp0']['find'].$this.Σ = $lub($Γ['global']['$tmp0']['find'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['find'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp78;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('$tmp0', 'splay_', $Γ['global']['$tmp0']['find']);
    $rf.scope = $Γ['global']['$tmp0']['find'];
    $rf.$this = $Γ['global']['$tmp0']['find']['$tmp0'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['find']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp76 = this.splay_(key);
    $Γ['global']['$tmp0']['find']['$tmp76'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['find']['$tmp76'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp76'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp76'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp76'] = $lub($Γ['global']['$tmp0']['find']['$tmp76'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['find']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['find']);
    $Γ['global']['$tmp0']['find']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp61'] = $lub($Γ['global']['$tmp0']['find']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp116 = $tmp61.key;
    $Γ['global']['$tmp0']['find']['$tmp116'] = sec_lvl('$tmp61', 'key', false, $Γ['global']['$tmp0']['find']);
    $Γ['global']['$tmp0']['find']['$tmp116'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp116'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp116'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp116'] = $lub($Γ['global']['$tmp0']['find']['$tmp116'], $Λ[$Λ.length - 1].l);
    $tmp115 = $tmp116 == key;
    $Γ['global']['$tmp0']['find']['$tmp115'] = $lub(sec_lvl('$tmp116', null, true, $Γ['global']['$tmp0']['find']), sec_lvl('key', null, true, $Γ['global']['$tmp0']['find']));
    $Γ['global']['$tmp0']['find']['$tmp115'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp115'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp115'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp115'] = $lub($Γ['global']['$tmp0']['find']['$tmp115'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp115', null, true, $Γ['global']['$tmp0']['find'])),
        id: 'IF'
    });
    if ($tmp115) {
        $tmp77 = this.root_;
        $Γ['global']['$tmp0']['find']['$tmp77'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['find']);
        $Γ['global']['$tmp0']['find']['$tmp77'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp77'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp77'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp77'] = $lub($Γ['global']['$tmp0']['find']['$tmp77'], $Λ[$Λ.length - 1].l);
    } else {
        $tmp77 = null;
        $Γ['global']['$tmp0']['find']['$tmp77'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['find'], '$tmp77')['$tmp77'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['find'].InvokedAsContr) {
            $Γ['global']['$tmp0']['find'].$this.Σ = $lub($Γ['global']['$tmp0']['find'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['find'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp77;
};
$Γ['global']['$tmp0']['find'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.findMax = function (opt_startNode) {
    var $tmp79, current, $tmp80, $tmp81;
    $Γ['global']['$tmp0']['findMax']['$tmp81'] = $Γ['global']['$tmp0']['findMax']['$tmp80'] = $Γ['global']['$tmp0']['findMax']['current'] = $Γ['global']['$tmp0']['findMax']['$tmp79'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['findMax']);
    $rf.scope = $Γ['global']['$tmp0']['findMax'];
    $rf.$this = $Γ['global']['$tmp0']['findMax']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp79 = this.isEmpty();
    $Γ['global']['$tmp0']['findMax']['$tmp79'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['findMax']['$tmp79'] instanceof Object ? $Γ['global']['$tmp0']['findMax']['$tmp79'].Σ = $lub($Γ['global']['$tmp0']['findMax']['$tmp79'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findMax']['$tmp79'] = $lub($Γ['global']['$tmp0']['findMax']['$tmp79'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp79', null, true, $Γ['global']['$tmp0']['findMax'])),
        id: 'IF'
    });
    if ($tmp79) {
        var $tmp82;
        $Γ['global']['$tmp0']['findMax']['$tmp82'] = 0;
        $tmp82 = null;
        $Γ['global']['$tmp0']['findMax']['$tmp82'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp0']['findMax'], '$tmp82')['$tmp82'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp0']['findMax'].InvokedAsContr) {
                $Γ['global']['$tmp0']['findMax'].$this.Σ = $lub($Γ['global']['$tmp0']['findMax'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findMax'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp82;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp80 = this.root_;
    $Γ['global']['$tmp0']['findMax']['$tmp80'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['findMax']);
    $Γ['global']['$tmp0']['findMax']['$tmp80'] instanceof Object ? $Γ['global']['$tmp0']['findMax']['$tmp80'].Σ = $lub($Γ['global']['$tmp0']['findMax']['$tmp80'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findMax']['$tmp80'] = $lub($Γ['global']['$tmp0']['findMax']['$tmp80'], $Λ[$Λ.length - 1].l);
    current = opt_startNode || $tmp80;
    $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] = $lub(sec_lvl('opt_startNode', null, true, $Γ['global']['$tmp0']['findMax']), sec_lvl('$tmp80', null, true, $Γ['global']['$tmp0']['findMax']));
    $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    $tmp81 = current.right;
    $Γ['global']['$tmp0']['findMax']['$tmp81'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['findMax']);
    $Γ['global']['$tmp0']['findMax']['$tmp81'] instanceof Object ? $Γ['global']['$tmp0']['findMax']['$tmp81'].Σ = $lub($Γ['global']['$tmp0']['findMax']['$tmp81'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findMax']['$tmp81'] = $lub($Γ['global']['$tmp0']['findMax']['$tmp81'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp81', null, true, $Γ['global']['$tmp0']['findMax'])),
        id: 'LOOP'
    });
    while ($tmp81) {
        current = current.right;
        $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['findMax']);
        $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['findMax'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
        var $tmp81;
        $Γ['global']['$tmp0']['findMax']['$tmp81'] = 0;
        $tmp81 = current.right;
        $Γ['global']['$tmp0']['findMax']['$tmp81'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['findMax']);
        $Γ['global']['$tmp0']['findMax']['$tmp81'] instanceof Object ? $Γ['global']['$tmp0']['findMax']['$tmp81'].Σ = $lub($Γ['global']['$tmp0']['findMax']['$tmp81'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findMax']['$tmp81'] = $lub($Γ['global']['$tmp0']['findMax']['$tmp81'], $Λ[$Λ.length - 1].l);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['findMax'], 'current')['current'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['findMax'].InvokedAsContr) {
            $Γ['global']['$tmp0']['findMax'].$this.Σ = $lub($Γ['global']['$tmp0']['findMax'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findMax'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return current;
};
$Γ['global']['$tmp0']['findMax'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    opt_startNode: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.findGreatestLessThan = function (key) {
    var $tmp83, $tmp84, $tmp85, $tmp86, $tmp61;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'] = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'] = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'] = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['findGreatestLessThan']);
    $rf.scope = $Γ['global']['$tmp0']['findGreatestLessThan'];
    $rf.$this = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp83 = this.isEmpty();
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp83'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp83', null, true, $Γ['global']['$tmp0']['findGreatestLessThan'])),
        id: 'IF'
    });
    if ($tmp83) {
        var $tmp87;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp87'] = 0;
        $tmp87 = null;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp87'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp0']['findGreatestLessThan'], '$tmp87')['$tmp87'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp0']['findGreatestLessThan'].InvokedAsContr) {
                $Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findGreatestLessThan'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp87;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('$tmp0', 'splay_', $Γ['global']['$tmp0']['findGreatestLessThan']);
    $rf.scope = $Γ['global']['$tmp0']['findGreatestLessThan'];
    $rf.$this = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp0'];
    $rf['key'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['findGreatestLessThan']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp84 = this.splay_(key);
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp84'], $Λ[$Λ.length - 1].l);
    $tmp61 = this.root_;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['findGreatestLessThan']);
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'], $Λ[$Λ.length - 1].l);
    $tmp86 = $tmp61.key;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'] = sec_lvl('$tmp61', 'key', false, $Γ['global']['$tmp0']['findGreatestLessThan']);
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp86'], $Λ[$Λ.length - 1].l);
    $tmp85 = $tmp86 < key;
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'] = $lub(sec_lvl('$tmp86', null, true, $Γ['global']['$tmp0']['findGreatestLessThan']), sec_lvl('key', null, true, $Γ['global']['$tmp0']['findGreatestLessThan']));
    $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp85'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp85', null, true, $Γ['global']['$tmp0']['findGreatestLessThan'])),
        id: 'IF'
    });
    if ($tmp85) {
        $upgrade(['$tmp89'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['findGreatestLessThan']);
        var $tmp88;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'] = 0;
        $tmp88 = this.root_;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['findGreatestLessThan']);
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp88'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp0']['findGreatestLessThan'], '$tmp88')['$tmp88'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['$tmp0']['findGreatestLessThan'].InvokedAsContr) {
                $Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findGreatestLessThan'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp88;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp117, $tmp61;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['findGreatestLessThan']);
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp117 = $tmp61.left;
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'] = sec_lvl('$tmp61', 'left', false, $Γ['global']['$tmp0']['findGreatestLessThan']);
        $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp117'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp117', null, true, $Γ['global']['$tmp0']['findGreatestLessThan'])),
            id: 'IF'
        });
        if ($tmp117) {
            var $tmp89;
            $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'] = 0;
            $rf = $prop('$tmp0', 'findMax', $Γ['global']['$tmp0']['findGreatestLessThan']);
            $rf.scope = $Γ['global']['$tmp0']['findGreatestLessThan'];
            $rf.$this = $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp0'];
            $rf['opt_startNode'] = $lub(sec_lvl('$tmp0', 'left', true, $Γ['global']['$tmp0']['findGreatestLessThan']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp89 = this.findMax(this.root_.left);
            $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'] = $Λ.pop().l;
            $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'] instanceof Object ? $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'].Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'] = $lub($Γ['global']['$tmp0']['findGreatestLessThan']['$tmp89'], $Λ[$Λ.length - 1].l);
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['$tmp0']['findGreatestLessThan'], '$tmp89')['$tmp89'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['$tmp0']['findGreatestLessThan'].InvokedAsContr) {
                    $Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ, $old_pc.l);
                    $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findGreatestLessThan'].$this };
                } else {
                    $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp89;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
            $upgrade(['$tmp89'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['findGreatestLessThan']);
            var $tmp90;
            $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp90'] = 0;
            $tmp90 = null;
            $Γ['global']['$tmp0']['findGreatestLessThan']['$tmp90'] = $Λ[$Λ.length - 1].l;
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['$tmp0']['findGreatestLessThan'], '$tmp90')['$tmp90'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['$tmp0']['findGreatestLessThan'].InvokedAsContr) {
                    $Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ, $old_pc.l);
                    $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findGreatestLessThan'].$this };
                } else {
                    $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp90;
            var $shouldComp = { 'lbl': 'FUNC' };
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['$tmp0']['findGreatestLessThan'].InvokedAsContr) {
        $Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ = $lub($Γ['global']['$tmp0']['findGreatestLessThan'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['findGreatestLessThan'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
};
$Γ['global']['$tmp0']['findGreatestLessThan'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.exportKeys = function () {
    var result, $tmp91, $tmp92;
    $Γ['global']['$tmp0']['exportKeys']['$tmp92'] = $Γ['global']['$tmp0']['exportKeys']['$tmp91'] = $Γ['global']['$tmp0']['exportKeys']['result'] = 0;
    result = [];
    $scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'] = 0;
    $scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'] instanceof Object ? $scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'].Σ = $lub($scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'] = $lub($scope($Γ['global']['$tmp0']['exportKeys'], 'result', true)['result'], $Λ[$Λ.length - 1].l);
    $Γ['global']['$tmp0']['exportKeys']['result'] = {
        __proto__: {},
        scope: $Γ['global']['$tmp0']['exportKeys'],
        Σ: $lub($Λ[$Λ.length - 1].l)
    };
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['exportKeys']);
    $rf.scope = $Γ['global']['$tmp0']['exportKeys'];
    $rf.$this = $Γ['global']['$tmp0']['exportKeys']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp92 = this.isEmpty();
    $Γ['global']['$tmp0']['exportKeys']['$tmp92'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['exportKeys']['$tmp92'] instanceof Object ? $Γ['global']['$tmp0']['exportKeys']['$tmp92'].Σ = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp92'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['exportKeys']['$tmp92'] = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp92'], $Λ[$Λ.length - 1].l);
    $tmp91 = !$tmp92;
    $Γ['global']['$tmp0']['exportKeys']['$tmp91'] = sec_lvl('$tmp92', null, false, $Γ['global']['$tmp0']['exportKeys']);
    $Γ['global']['$tmp0']['exportKeys']['$tmp91'] instanceof Object ? $Γ['global']['$tmp0']['exportKeys']['$tmp91'].Σ = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp91'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['exportKeys']['$tmp91'] = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp91'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp91', null, true, $Γ['global']['$tmp0']['exportKeys'])),
        id: 'IF'
    });
    if ($tmp91) {
        var $tmp93, $tmp61, $tmp94;
        $Γ['global']['$tmp0']['exportKeys']['$tmp94'] = $Γ['global']['$tmp0']['exportKeys']['$tmp61'] = $Γ['global']['$tmp0']['exportKeys']['$tmp93'] = 0;
        $tmp61 = this.root_;
        $Γ['global']['$tmp0']['exportKeys']['$tmp61'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['exportKeys']);
        $Γ['global']['$tmp0']['exportKeys']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['exportKeys']['$tmp61'].Σ = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp61'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['exportKeys']['$tmp61'] = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp61'], $Λ[$Λ.length - 1].l);
        $tmp94 = function (node) {
            var $tmp95, $tmp96;
            $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'] = $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp95'] = 0;
            $tmp96 = node.key;
            $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'] = sec_lvl('node', 'key', false, $Γ['global']['$tmp0']['exportKeys']['$tmp94']);
            $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'] instanceof Object ? $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'].Σ = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'] = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp94']['$tmp96'], $Λ[$Λ.length - 1].l);
            $tmp95 = result.push($tmp96);
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            if ($Γ['global']['$tmp0']['exportKeys']['$tmp94'].InvokedAsContr) {
                $Γ['global']['$tmp0']['exportKeys']['$tmp94'].$this.Σ = $lub($Γ['global']['$tmp0']['exportKeys']['$tmp94'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['exportKeys']['$tmp94'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
            return;
        };
        $Γ['global']['$tmp0']['exportKeys']['$tmp94'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            scope: $Γ['global']['$tmp0']['exportKeys'],
            node: $Λ[$Λ.length - 1].l
        };
        $tmp93 = $tmp61.traverse_($tmp94);
    } else {
        $upgrade([
            'result.push',
            '$tmp95',
            '$tmp94',
            '$tmp61.traverse_',
            '$tmp93'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['exportKeys']);
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['exportKeys'], 'result')['result'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['exportKeys'].InvokedAsContr) {
            $Γ['global']['$tmp0']['exportKeys'].$this.Σ = $lub($Γ['global']['$tmp0']['exportKeys'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['exportKeys'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return result;
};
$Γ['global']['$tmp0']['exportKeys'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.splay_ = function (key) {
    var $tmp97, dummy, left, right, current;
    $Γ['global']['$tmp0']['splay_']['current'] = $Γ['global']['$tmp0']['splay_']['right'] = $Γ['global']['$tmp0']['splay_']['left'] = $Γ['global']['$tmp0']['splay_']['dummy'] = $Γ['global']['$tmp0']['splay_']['$tmp97'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['splay_']);
    $rf.scope = $Γ['global']['$tmp0']['splay_'];
    $rf.$this = $Γ['global']['$tmp0']['splay_']['$tmp0'];
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp97 = this.isEmpty();
    $Γ['global']['$tmp0']['splay_']['$tmp97'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['splay_']['$tmp97'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp97'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp97'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp97'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp97'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp97', null, true, $Γ['global']['$tmp0']['splay_'])),
        id: 'IF'
    });
    if ($tmp97) {
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        if ($Γ['global']['$tmp0']['splay_'].InvokedAsContr) {
            $Γ['global']['$tmp0']['splay_'].$this.Σ = $lub($Γ['global']['$tmp0']['splay_'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['splay_'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
        return;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $rf = $prop('SplayTree', 'Node', $Γ['global']['$tmp0']['splay_']);
    $rf.scope = $Γ['global']['$tmp0']['splay_'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['key'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
    $rf['value'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    right = new SplayTree.Node(null, null);
    $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] = $Λ.pop().l;
    $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
    left = right;
    $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] = sec_lvl('right', null, false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
    dummy = left;
    $scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'] = sec_lvl('left', null, false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'dummy', true)['dummy'], $Λ[$Λ.length - 1].l);
    current = this.root_;
    $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        id: 'LOOP'
    });
    while (true) {
        var $tmp98, $tmp99;
        $Γ['global']['$tmp0']['splay_']['$tmp99'] = $Γ['global']['$tmp0']['splay_']['$tmp98'] = 0;
        $tmp99 = current.key;
        $Γ['global']['$tmp0']['splay_']['$tmp99'] = sec_lvl('current', 'key', false, $Γ['global']['$tmp0']['splay_']);
        $Γ['global']['$tmp0']['splay_']['$tmp99'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp99'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp99'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp99'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp99'], $Λ[$Λ.length - 1].l);
        $tmp98 = key < $tmp99;
        $Γ['global']['$tmp0']['splay_']['$tmp98'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['splay_']), sec_lvl('$tmp99', null, true, $Γ['global']['$tmp0']['splay_']));
        $Γ['global']['$tmp0']['splay_']['$tmp98'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp98'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp98'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp98'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp98'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp98', null, true, $Γ['global']['$tmp0']['splay_'])),
            id: 'IF'
        });
        if ($tmp98) {
            var $tmp100, $tmp101, $tmp102, $tmp103, $tmp104;
            $Γ['global']['$tmp0']['splay_']['$tmp104'] = $Γ['global']['$tmp0']['splay_']['$tmp103'] = $Γ['global']['$tmp0']['splay_']['$tmp102'] = $Γ['global']['$tmp0']['splay_']['$tmp101'] = $Γ['global']['$tmp0']['splay_']['$tmp100'] = 0;
            $tmp101 = current.left;
            $Γ['global']['$tmp0']['splay_']['$tmp101'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
            $Γ['global']['$tmp0']['splay_']['$tmp101'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp101'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp101'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp101'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp101'], $Λ[$Λ.length - 1].l);
            $tmp100 = !$tmp101;
            $Γ['global']['$tmp0']['splay_']['$tmp100'] = sec_lvl('$tmp101', null, false, $Γ['global']['$tmp0']['splay_']);
            $Γ['global']['$tmp0']['splay_']['$tmp100'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp100'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp100'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp100'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp100'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp100', null, true, $Γ['global']['$tmp0']['splay_'])),
                id: 'IF'
            });
            if ($tmp100) {
                break;
                var $shouldComp = { 'lbl': 'LOOP' };
            } else {
            }
            if ($shouldComp)
                $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
            $Λ.pop();
            $tmp104 = current.left;
            $Γ['global']['$tmp0']['splay_']['$tmp104'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
            $Γ['global']['$tmp0']['splay_']['$tmp104'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp104'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp104'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp104'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp104'], $Λ[$Λ.length - 1].l);
            $tmp103 = $tmp104.key;
            $Γ['global']['$tmp0']['splay_']['$tmp103'] = sec_lvl('$tmp104', 'key', false, $Γ['global']['$tmp0']['splay_']);
            $Γ['global']['$tmp0']['splay_']['$tmp103'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp103'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp103'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp103'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp103'], $Λ[$Λ.length - 1].l);
            $tmp102 = key < $tmp103;
            $Γ['global']['$tmp0']['splay_']['$tmp102'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['splay_']), sec_lvl('$tmp103', null, true, $Γ['global']['$tmp0']['splay_']));
            $Γ['global']['$tmp0']['splay_']['$tmp102'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp102'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp102'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp102'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp102'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp102', null, true, $Γ['global']['$tmp0']['splay_'])),
                id: 'IF'
            });
            if ($tmp102) {
                var tmp, $tmp105, $tmp106;
                $Γ['global']['$tmp0']['splay_']['$tmp106'] = $Γ['global']['$tmp0']['splay_']['$tmp105'] = $Γ['global']['$tmp0']['splay_']['tmp'] = 0;
                tmp = current.left;
                $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'], $Λ[$Λ.length - 1].l);
                current.left = tmp.right;
                $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] = sec_lvl('tmp', 'right', false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'], $Λ[$Λ.length - 1].l);
                tmp.right = current;
                $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['right'], $Λ[$Λ.length - 1].l);
                current = tmp;
                $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = sec_lvl('tmp', null, false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
                $tmp106 = current.left;
                $Γ['global']['$tmp0']['splay_']['$tmp106'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp106'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp106'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp106'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp106'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp106'], $Λ[$Λ.length - 1].l);
                $tmp105 = !$tmp106;
                $Γ['global']['$tmp0']['splay_']['$tmp105'] = sec_lvl('$tmp106', null, false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp105'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp105'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp105'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp105'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp105'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp105', null, true, $Γ['global']['$tmp0']['splay_'])),
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
            } else {
            }
            $Λ.pop();
            right.left = current;
            $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
            $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'], $Λ[$Λ.length - 1].l);
            right = current;
            $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
            $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', true)['right'], $Λ[$Λ.length - 1].l);
            current = current.left;
            $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
            $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
        } else {
            var $tmp118, $tmp119;
            $Γ['global']['$tmp0']['splay_']['$tmp119'] = $Γ['global']['$tmp0']['splay_']['$tmp118'] = 0;
            $tmp119 = current.key;
            $Γ['global']['$tmp0']['splay_']['$tmp119'] = sec_lvl('current', 'key', false, $Γ['global']['$tmp0']['splay_']);
            $Γ['global']['$tmp0']['splay_']['$tmp119'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp119'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp119'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp119'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp119'], $Λ[$Λ.length - 1].l);
            $tmp118 = key > $tmp119;
            $Γ['global']['$tmp0']['splay_']['$tmp118'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['splay_']), sec_lvl('$tmp119', null, true, $Γ['global']['$tmp0']['splay_']));
            $Γ['global']['$tmp0']['splay_']['$tmp118'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp118'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp118'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp118'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp118'], $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp118', null, true, $Γ['global']['$tmp0']['splay_'])),
                id: 'IF'
            });
            if ($tmp118) {
                var $tmp107, $tmp108, $tmp109, $tmp110, $tmp111;
                $Γ['global']['$tmp0']['splay_']['$tmp111'] = $Γ['global']['$tmp0']['splay_']['$tmp110'] = $Γ['global']['$tmp0']['splay_']['$tmp109'] = $Γ['global']['$tmp0']['splay_']['$tmp108'] = $Γ['global']['$tmp0']['splay_']['$tmp107'] = 0;
                $tmp108 = current.right;
                $Γ['global']['$tmp0']['splay_']['$tmp108'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp108'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp108'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp108'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp108'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp108'], $Λ[$Λ.length - 1].l);
                $tmp107 = !$tmp108;
                $Γ['global']['$tmp0']['splay_']['$tmp107'] = sec_lvl('$tmp108', null, false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp107'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp107'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp107'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp107'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp107'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp107', null, true, $Γ['global']['$tmp0']['splay_'])),
                    id: 'IF'
                });
                if ($tmp107) {
                    break;
                    var $shouldComp = { 'lbl': 'LOOP' };
                } else {
                }
                if ($shouldComp)
                    $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
                $Λ.pop();
                $tmp111 = current.right;
                $Γ['global']['$tmp0']['splay_']['$tmp111'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp111'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp111'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp111'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp111'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp111'], $Λ[$Λ.length - 1].l);
                $tmp110 = $tmp111.key;
                $Γ['global']['$tmp0']['splay_']['$tmp110'] = sec_lvl('$tmp111', 'key', false, $Γ['global']['$tmp0']['splay_']);
                $Γ['global']['$tmp0']['splay_']['$tmp110'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp110'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp110'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp110'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp110'], $Λ[$Λ.length - 1].l);
                $tmp109 = key > $tmp110;
                $Γ['global']['$tmp0']['splay_']['$tmp109'] = $lub(sec_lvl('key', null, true, $Γ['global']['$tmp0']['splay_']), sec_lvl('$tmp110', null, true, $Γ['global']['$tmp0']['splay_']));
                $Γ['global']['$tmp0']['splay_']['$tmp109'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp109'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp109'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp109'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp109'], $Λ[$Λ.length - 1].l);
                $Λ.push({
                    l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp109', null, true, $Γ['global']['$tmp0']['splay_'])),
                    id: 'IF'
                });
                if ($tmp109) {
                    var tmp, $tmp112, $tmp113;
                    $Γ['global']['$tmp0']['splay_']['$tmp113'] = $Γ['global']['$tmp0']['splay_']['$tmp112'] = $Γ['global']['$tmp0']['splay_']['tmp'] = 0;
                    tmp = current.right;
                    $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
                    $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', true)['tmp'], $Λ[$Λ.length - 1].l);
                    current.right = tmp.left;
                    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] = sec_lvl('tmp', 'left', false, $Γ['global']['$tmp0']['splay_']);
                    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'], $Λ[$Λ.length - 1].l);
                    tmp.left = current;
                    $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
                    $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'tmp', false)['left'], $Λ[$Λ.length - 1].l);
                    current = tmp;
                    $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = sec_lvl('tmp', null, false, $Γ['global']['$tmp0']['splay_']);
                    $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
                    $tmp113 = current.right;
                    $Γ['global']['$tmp0']['splay_']['$tmp113'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
                    $Γ['global']['$tmp0']['splay_']['$tmp113'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp113'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp113'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp113'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp113'], $Λ[$Λ.length - 1].l);
                    $tmp112 = !$tmp113;
                    $Γ['global']['$tmp0']['splay_']['$tmp112'] = sec_lvl('$tmp113', null, false, $Γ['global']['$tmp0']['splay_']);
                    $Γ['global']['$tmp0']['splay_']['$tmp112'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp112'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp112'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp112'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp112'], $Λ[$Λ.length - 1].l);
                    $Λ.push({
                        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp112', null, true, $Γ['global']['$tmp0']['splay_'])),
                        id: 'IF'
                    });
                    if ($tmp112) {
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
                $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'], $Λ[$Λ.length - 1].l);
                left = current;
                $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
                current = current.right;
                $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
                $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
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
    $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'left', false)['right'], $Λ[$Λ.length - 1].l);
    right.left = current.right;
    $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'right', false)['left'], $Λ[$Λ.length - 1].l);
    current.left = dummy.right;
    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] = sec_lvl('dummy', 'right', false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['left'], $Λ[$Λ.length - 1].l);
    current.right = dummy.left;
    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] = sec_lvl('dummy', 'left', false, $Γ['global']['$tmp0']['splay_']);
    $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] instanceof Object ? $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'].Σ = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'] = $lub($scope($Γ['global']['$tmp0']['splay_'], 'current', false)['right'], $Λ[$Λ.length - 1].l);
    this.root_ = current;
    $Γ['global']['$tmp0']['splay_']['$tmp0']['root_'] = sec_lvl('current', null, false, $Γ['global']['$tmp0']['splay_']);
    $Γ['global']['$tmp0']['splay_']['$tmp0']['root_'] instanceof Object ? $Γ['global']['$tmp0']['splay_']['$tmp0']['root_'].Σ = $lub($Γ['global']['$tmp0']['splay_']['$tmp0']['root_'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['splay_']['$tmp0']['root_'] = $lub($Γ['global']['$tmp0']['splay_']['$tmp0']['root_'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['$tmp0']['splay_'].InvokedAsContr) {
        $Γ['global']['$tmp0']['splay_'].$this.Σ = $lub($Γ['global']['$tmp0']['splay_'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['splay_'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
};
$Γ['global']['$tmp0']['splay_'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l
};
SplayTree.Node = function (key, value) {
    this.key = key;
    $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'] = sec_lvl('key', null, false, $Γ['global']['SplayTree']['Node']);
    $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'] instanceof Object ? $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'].Σ = $lub($scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'] = $lub($scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['key'], $Λ[$Λ.length - 1].l);
    this.value = value;
    $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'] = sec_lvl('value', null, false, $Γ['global']['SplayTree']['Node']);
    $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'] instanceof Object ? $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'].Σ = $lub($scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'] = $lub($scope($Γ['global']['SplayTree']['Node'], 'SplayTree', false)['value'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayTree']['Node'].InvokedAsContr) {
        $Γ['global']['SplayTree']['Node'].$this.Σ = $lub($Γ['global']['SplayTree']['Node'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['SplayTree']['Node'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
};
$Γ['global']['SplayTree']['Node'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l,
    value: $Λ[$Λ.length - 1].l
};
$tmp1 = SplayTree.Node;
$Γ['global']['$tmp1'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$tmp = $tmp1.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp1', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.left = null;
$Γ['global']['$tmp']['left'] = $Λ[$Λ.length - 1].l;
$tmp1 = SplayTree.Node;
$Γ['global']['$tmp1'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$tmp = $tmp1.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp1', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $lub($Γ['global']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp'] = $lub($Γ['global']['$tmp'], $Λ[$Λ.length - 1].l);
$tmp.right = null;
$Γ['global']['$tmp']['right'] = $Λ[$Λ.length - 1].l;
$tmp1 = SplayTree.Node;
$Γ['global']['$tmp1'] = sec_lvl('SplayTree', 'Node', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$tmp = $tmp1.prototype;
$Γ['global']['$tmp'] = sec_lvl('$tmp1', 'prototype', false, $Γ['global']);
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
        var left, $tmp114;
        $Γ['global']['$tmp']['traverse_']['$tmp114'] = $Γ['global']['$tmp']['traverse_']['left'] = 0;
        left = current.left;
        $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] = sec_lvl('current', 'left', false, $Γ['global']['$tmp']['traverse_']);
        $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] instanceof Object ? $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'].Σ = $lub($scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'] = $lub($scope($Γ['global']['$tmp']['traverse_'], 'left', true)['left'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('left', null, true, $Γ['global']['$tmp']['traverse_'])),
            id: 'IF'
        });
        if (left) {
            var $tmp120;
            $Γ['global']['$tmp']['traverse_']['$tmp120'] = 0;
            $tmp120 = left.traverse_(f);
        } else {
            $upgrade([
                'left.traverse_',
                '$tmp120'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['traverse_']);
        }
        $Λ.pop();
        $tmp114 = f(current);
        current = current.right;
        $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = sec_lvl('current', 'right', false, $Γ['global']['$tmp']['traverse_']);
        $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] instanceof Object ? $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'] = $lub($scope($Γ['global']['$tmp']['traverse_'], 'current', true)['current'], $Λ[$Λ.length - 1].l);
    }
    $upgrade([
        'left.traverse_',
        '$tmp120',
        'f',
        '$tmp114'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp']['traverse_']);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['$tmp']['traverse_'].InvokedAsContr) {
        $Γ['global']['$tmp']['traverse_'].$this.Σ = $lub($Γ['global']['$tmp']['traverse_'].$this.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp']['traverse_'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
};
$Γ['global']['$tmp']['traverse_'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    f: $Λ[$Λ.length - 1].l
};
$rf = $scope($Γ['global'], 'SplaySetup', false)['SplaySetup'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp2 = SplaySetup();
$Γ['global']['$tmp2'] = $Λ.pop().l;
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
$rf = $scope($Γ['global'], 'SplayRun', false)['SplayRun'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp3 = SplayRun();
$Γ['global']['$tmp3'] = $Λ.pop().l;
$Γ['global']['$tmp3'] instanceof Object ? $Γ['global']['$tmp3'].Σ = $lub($Γ['global']['$tmp3'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp3'] = $lub($Γ['global']['$tmp3'], $Λ[$Λ.length - 1].l);
$rf = $scope($Γ['global'], 'SplayTearDown', false)['SplayTearDown'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp4 = SplayTearDown();
$Γ['global']['$tmp4'] = $Λ.pop().l;
$Γ['global']['$tmp4'] instanceof Object ? $Γ['global']['$tmp4'].Σ = $lub($Γ['global']['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp4'] = $lub($Γ['global']['$tmp4'], $Λ[$Λ.length - 1].l);
