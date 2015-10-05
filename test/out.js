function SplayTree() {
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['SplayTree'].InvokedAsContr) {
        $Γ['global']['SplayTree'].this.Σ = $lub($Γ['global']['SplayTree'].this.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $Γ['global']['SplayTree'].this };
    } else {
        $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
    }
    return;
}
$Γ['global']['SplayTree'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
;
var $tmp0;
$Γ['global']['$tmp0'] = 0;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.root_ = null;
$Γ['global']['$tmp0']['root_'] = $Λ[$Λ.length - 1].l;
$tmp0 = SplayTree.prototype;
$Γ['global']['$tmp0'] = sec_lvl('SplayTree', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $lub($Γ['global']['$tmp0'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0'] = $lub($Γ['global']['$tmp0'], $Λ[$Λ.length - 1].l);
$tmp0.isEmpty = function () {
    var $tmp1, $tmp2;
    $Γ['global']['$tmp0']['isEmpty']['$tmp2'] = $Γ['global']['$tmp0']['isEmpty']['$tmp1'] = 0;
    $tmp2 = this.root_;
    $Γ['global']['$tmp0']['isEmpty']['$tmp2'] = sec_lvl('$tmp0', 'root_', false, $Γ['global']['$tmp0']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp2'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp2'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp2'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp2'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp2'], $Λ[$Λ.length - 1].l);
    $tmp1 = !$tmp2;
    $Γ['global']['$tmp0']['isEmpty']['$tmp1'] = sec_lvl('$tmp2', null, false, $Γ['global']['$tmp0']['isEmpty']);
    $Γ['global']['$tmp0']['isEmpty']['$tmp1'] instanceof Object ? $Γ['global']['$tmp0']['isEmpty']['$tmp1'].Σ = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp0']['isEmpty']['$tmp1'] = $lub($Γ['global']['$tmp0']['isEmpty']['$tmp1'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['isEmpty'], '$tmp1')['$tmp1'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.len - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['isEmpty'].InvokedAsContr) {
            $Γ['global']['$tmp0']['isEmpty'].this.Σ = $lub($Γ['global']['$tmp0']['isEmpty'].this.Σ, $old_pc.l);
            $Λ[$Λ.len - 1] = { 'l': $Γ['global']['$tmp0']['isEmpty'].this };
        } else {
            $Λ[$Λ.len - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp1;
};
$Γ['global']['$tmp0']['isEmpty'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l
};
$rf = $scope($Γ['global'], 'SplayTree', false)['SplayTree'];
$rf.scope = $Γ['global'];
$rf.this = {
    Σ: $Λ[$Λ.length - 1].l,
    __proto__: $rf.prototype
};
$rf.InvokedAsContr = true;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
b = new SplayTree();
$Γ['global']['b'] = $Λ.pop().l;
$Γ['global']['b'] instanceof Object ? $Γ['global']['b'].Σ = $lub($Γ['global']['b'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['b'] = $lub($Γ['global']['b'], $Λ[$Λ.length - 1].l);
bool = b.isEmpty();