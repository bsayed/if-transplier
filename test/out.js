$Γ['global']['SplayTree'] = {
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
;
var $tmp0, sp, $tmp1, $tmp2, $tmp3, $tmp4;
$Γ['global']['$tmp4'] = $Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['sp'] = $Γ['global']['$tmp0'] = 0;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.root_ = null;
$Γ['global']['$tmp0']['root_'] = $Λ[$Λ.length - 1].l;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.isEmpty = function (Mykey) {
    var $tmp5, $tmp6;
    $Γ['global']['$tmp0']['isEmpty']['$tmp6'] = $Γ['global']['$tmp0']['isEmpty']['$tmp5'] = 0;
    $tmp6 = this.root_;
    $Γ['global']['$tmp0']['isEmpty']['$tmp6'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['isEmpty']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp6'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp6'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp6'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp6'], $Λ[$Λ.length - 1].l);
    $tmp5 = !$tmp6;
    $Γ['global']['$tmp0']['isEmpty']['$tmp5'] = sec_lvl('$tmp6', null, false, $Γ['global']['$tmp0']['isEmpty']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp5'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp5'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp5'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp5'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp5'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['isEmpty'], '$tmp5')['$tmp5'];
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
    return $tmp5;
};
$Γ['global']['$tmp0']['isEmpty'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    Mykey: $Λ[$Λ.length - 1].l
};
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.find = function (key) {
    var $tmp7, $tmp8, $tmp10, $tmp11, $tmp12;
    $Γ['global']['$tmp0']['find']['$tmp12'] = $Γ['global']['$tmp0']['find']['$tmp11'] = $Γ['global']['$tmp0']['find']['$tmp10'] = $Γ['global']['$tmp0']['find']['$tmp8'] = $Γ['global']['$tmp0']['find']['$tmp7'] = 0;
    $rf = $prop('$tmp0', 'isEmpty', $Γ['global']['$tmp0']['find']);
    $rf.scope = $Γ['global']['$tmp0']['find'];
    $rf.$this = $Γ['global']['$tmp0']['find']['$tmp0'];
    $rf['Mykey'] = $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp7 = this.isEmpty();
    $Γ['global']['$tmp0']['find']['$tmp7'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['find']['$tmp7'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp7'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp7'] = $lub($Γ['global']['$tmp0']['find']['$tmp7'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp7', null, true, $Γ['global']['$tmp0']['find'])),
        id: 'IF'
    });
    if ($tmp7) {
        var $tmp9;
        $Γ['global']['$tmp0']['find']['$tmp9'] = 0;
        $tmp9 = null;
        $Γ['global']['$tmp0']['find']['$tmp9'] = $Λ[$Λ.length - 1].l;
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['$tmp0']['find'], '$tmp9')['$tmp9'];
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
        return $tmp9;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp12 = this.root_;
    $Γ['global']['$tmp0']['find']['$tmp12'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['find']);
    $Γ['global']['$tmp0']['find']['$tmp12'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp12'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp12'] = $lub($Γ['global']['$tmp0']['find']['$tmp12'], $Λ[$Λ.length - 1].l);
    $tmp11 = $tmp12.key;
    $Γ['global']['$tmp0']['find']['$tmp11'] = sec_lvl('$tmp12', 'key', false, $Γ['global']['$tmp0']['find']);
    $Γ['global']['$tmp0']['find']['$tmp11'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp11'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp11'] = $lub($Γ['global']['$tmp0']['find']['$tmp11'], $Λ[$Λ.length - 1].l);
    $tmp10 = $tmp11 == key;
    $Γ['global']['$tmp0']['find']['$tmp10'] = $lub(sec_lvl('$tmp11', null, true, $Γ['global']['$tmp0']['find']), sec_lvl('key', null, true, $Γ['global']['$tmp0']['find']));
    $Γ['global']['$tmp0']['find']['$tmp10'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp10'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp10'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp10'] = $lub($Γ['global']['$tmp0']['find']['$tmp10'], $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp10', null, true, $Γ['global']['$tmp0']['find'])),
        id: 'IF'
    });
    if ($tmp10) {
        $tmp8 = this.root_;
        $Γ['global']['$tmp0']['find']['$tmp8'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']['find']);
        $Γ['global']['$tmp0']['find']['$tmp8'] instanceof Object ? $Γ['global']['$tmp0']['find']['$tmp8'].Σ = $lub($Γ['global']['$tmp0']['find']['$tmp8'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['find']['$tmp8'] = $lub($Γ['global']['$tmp0']['find']['$tmp8'], $Λ[$Λ.length - 1].l);
    } else {
        $tmp8 = null;
        $Γ['global']['$tmp0']['find']['$tmp8'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['find'], '$tmp8')['$tmp8'];
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
    return $tmp8;
};
$Γ['global']['$tmp0']['find'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    key: $Λ[$Λ.length - 1].l
};
$rf = $scope($Γ['global'], 'SplayTree', false)['SplayTree'];
$rf.scope = $Γ['global'];
$rf.$this = {
    Σ: $Λ[$Λ.length - 1].l,
    __$proto__: $rf.prototype
};
$rf.InvokedAsContr = true;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
sp = new SplayTree();
$Γ['global']['sp'] = $Λ.pop().l;
$Γ['global']['sp'] instanceof Object ? $Γ['global']['sp'].Σ = $lub($Γ['global']['sp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['sp'] = $lub($Γ['global']['sp'], $Λ[$Λ.length - 1].l);
sp.root_ = { key: 44 };
$Γ['global']['sp']['root_'] = {
    __proto__: {},
    key: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
    Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
};
$rf = $prop('sp', 'isEmpty', $Γ['global']);
$rf.scope = $Γ['global'];
$rf.$this = $scope($Γ['global'], 'sp', false)['sp'];
$rf['Mykey'] = $Λ[$Λ.length - 1].l;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp2 = sp.isEmpty();
$Γ['global']['$tmp2'] = $Λ.pop().l;
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $lub($Γ['global']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp2'] = $lub($Γ['global']['$tmp2'], $Λ[$Λ.length - 1].l);
$tmp1 = console.log($tmp2);
$rf = $prop('sp', 'find', $Γ['global']);
$rf.scope = $Γ['global'];
$rf.$this = $scope($Γ['global'], 'sp', false)['sp'];
$rf['key'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp4 = sp.find(44);
$Γ['global']['$tmp4'] = $Λ.pop().l;
$Γ['global']['$tmp4'] instanceof Object ? $Γ['global']['$tmp4'].Σ = $lub($Γ['global']['$tmp4'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp4'] = $lub($Γ['global']['$tmp4'], $Λ[$Λ.length - 1].l);
$tmp3 = console.log($tmp4);