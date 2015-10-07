
var $Γ = {'global': {'scope': null, 'Σ': 0}};

$Γ['global'].$this = $Γ['global'];

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
        return $Γ['global'];
    } else {

        // if we can't find $var in any scope and its name is 'global'
        // it must be the the global object. Return $Γ which contains
        // global object as a property.
        if($var == 'global')
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
var kSplayTreeSize, kSplayTreeModifications, kSplayTreePayloadDepth, splayTree, splaySampleTimeStart, $tmp0, $tmp1;
$Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['splaySampleTimeStart'] = $Γ['global']['splayTree'] = $Γ['global']['kSplayTreePayloadDepth'] = $Γ['global']['kSplayTreeModifications'] = $Γ['global']['kSplayTreeSize'] = 0;
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
$rf = $scope($Γ['global'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
$rf.scope = $Γ['global'];
$rf.$this = {
    Σ: $Λ[$Λ.length - 1].l,
    __$proto__: $rf.prototype
};
$rf['depth'] = $lub(sec_lvl('kSplayTreePayloadDepth', null, true, $Γ['global']), $Λ[$Λ.length - 1].l);
$rf['tag'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
$rf.InvokedAsContr = true;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
payload = new GeneratePayloadTree(kSplayTreePayloadDepth, '3.4');
$Γ['global']['payload'] = $Λ.pop().l;
$Γ['global']['payload'] instanceof Object ? $Γ['global']['payload'].Σ = $lub($Γ['global']['payload'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['payload'] = $lub($Γ['global']['payload'], $Λ[$Λ.length - 1].l);
function GeneratePayloadTree(depth, tag) {
    this.bassam = 'blah';
    $Γ['global']['GeneratePayloadTree']['$this']['bassam'] = $Λ[$Λ.length - 1].l;
    var $tmp2;
    $Γ['global']['GeneratePayloadTree']['$tmp2'] = 0;
    $tmp2 = depth == 0;
    $Γ['global']['GeneratePayloadTree']['$tmp2'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
    $Γ['global']['GeneratePayloadTree']['$tmp2'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp2'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp2'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp2'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp2', null, true, $Γ['global']['GeneratePayloadTree'])),
        id: 'IF'
    });
    if ($tmp2) {
        $upgrade([
            '$tmp8',
            '$tmp10'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['GeneratePayloadTree']);
        var $tmp3, $tmp4, $tmp5, $tmp6;
        $Γ['global']['GeneratePayloadTree']['$tmp6'] = $Γ['global']['GeneratePayloadTree']['$tmp5'] = $Γ['global']['GeneratePayloadTree']['$tmp4'] = $Γ['global']['GeneratePayloadTree']['$tmp3'] = 0;
        $tmp4 = [
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
        $Γ['global']['GeneratePayloadTree']['$tmp4'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp4'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp4'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp4'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp4'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp4'] = {
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
        $tmp6 = 'String for key ' + tag;
        $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub($Λ[$Λ.length - 1].l, sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp6'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp6'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp6'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp6'], $Λ[$Λ.length - 1].l);
        $tmp5 = $tmp6 + ' in leaf node';
        $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub(sec_lvl('$tmp6', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp5'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp5'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp5'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp5'], $Λ[$Λ.length - 1].l);
        $tmp3 = {
            array: $tmp4,
            string: $tmp5
        };
        $Γ['global']['GeneratePayloadTree']['$tmp3'] = $lub(sec_lvl('$tmp4', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp5', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp3'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp3'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp3'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp3'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp3'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp3'] = {
            __proto__: {},
            array: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp4', null, true, $Γ['global']['GeneratePayloadTree'])),
            string: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp5', null, true, $Γ['global']['GeneratePayloadTree'])),
            Σ: $lub(sec_lvl('$tmp4', null, true, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp5', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp3')['$tmp3'];
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
        return $tmp3;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp7, $tmp8, $tmp9, $tmp10, $tmp11;
        $Γ['global']['GeneratePayloadTree']['$tmp11'] = $Γ['global']['GeneratePayloadTree']['$tmp10'] = $Γ['global']['GeneratePayloadTree']['$tmp9'] = $Γ['global']['GeneratePayloadTree']['$tmp8'] = $Γ['global']['GeneratePayloadTree']['$tmp7'] = 0;
        $tmp9 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp9'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp9'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp9'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp9'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp9'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.$this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp9', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp8 = GeneratePayloadTree($tmp9, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp8'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp8'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp8'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp8'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp8'], $Λ[$Λ.length - 1].l);
        $tmp11 = depth - 1;
        $Γ['global']['GeneratePayloadTree']['$tmp11'] = $lub(sec_lvl('depth', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp11'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp11'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp11'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp11'], $Λ[$Λ.length - 1].l);
        $rf = $scope($Γ['global'], 'GeneratePayloadTree', false)['GeneratePayloadTree'];
        $rf.scope = $Γ['global']['GeneratePayloadTree'];
        $rf.$this = $Γ['global'];
        $rf['depth'] = $lub(sec_lvl('$tmp11', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $rf['tag'] = $lub(sec_lvl('tag', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
            id: 'FUNC'
        });
        $tmp10 = GeneratePayloadTree($tmp11, tag);
        $Γ['global']['GeneratePayloadTree']['$tmp10'] = $Λ.pop().l;
        $Γ['global']['GeneratePayloadTree']['$tmp10'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp10'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp10'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp10'], $Λ[$Λ.length - 1].l);
        $tmp7 = {
            left: $tmp8,
            right: $tmp10
        };
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub(sec_lvl('$tmp8', null, false, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp10', null, false, $Γ['global']['GeneratePayloadTree']));
        $Γ['global']['GeneratePayloadTree']['$tmp7'] instanceof Object ? $Γ['global']['GeneratePayloadTree']['$tmp7'].Σ = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['GeneratePayloadTree']['$tmp7'] = $lub($Γ['global']['GeneratePayloadTree']['$tmp7'], $Λ[$Λ.length - 1].l);
        $Γ['global']['GeneratePayloadTree']['$tmp7'] = {
            __proto__: {},
            left: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp8', null, true, $Γ['global']['GeneratePayloadTree'])),
            right: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp10', null, true, $Γ['global']['GeneratePayloadTree'])),
            Σ: $lub(sec_lvl('$tmp8', null, true, $Γ['global']['GeneratePayloadTree']), sec_lvl('$tmp10', null, true, $Γ['global']['GeneratePayloadTree']), $Λ[$Λ.length - 1].l)
        };
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['GeneratePayloadTree'], '$tmp7')['$tmp7'];
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
        return $tmp7;
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
$tmp1 = payload.bassam;
$Γ['global']['$tmp1'] = sec_lvl('payload', 'bassam', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$tmp0 = console.log($tmp1);