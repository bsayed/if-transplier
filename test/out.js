$Γ['global']['foo'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    i: $Λ[$Λ.length - 1].l
};
var pass, $tmp0, obj, $tmp1, $tmp2, $tmp3;
$Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['obj'] = $Γ['global']['$tmp0'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pass'] instanceof Object ? $Γ['global']['pass'].Σ = $Γ['global']['pass'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pass'] = $Γ['global']['pass'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'] : $Λ[$Λ.length - 1].l;
function foo(i) {
    this.i = i;
    $Γ['global']['foo']['$this']['i'] = sec_lvl('i', null, false, $Γ['global']['foo']);
    $Γ['global']['foo']['$this']['i'] instanceof Object ? $Γ['global']['foo']['$this']['i'].Σ = $Γ['global']['foo']['$this']['i'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$this']['i'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['foo']['$this']['i'] = $Γ['global']['foo']['$this']['i'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$this']['i'] : $Λ[$Λ.length - 1].l;
    $Γ['global']['foo']['$this']['\u03A3'] = $Γ['global']['foo']['$this']['\u03A3'] >= sec_lvl('$this', 'i', true, $Γ['global']['foo']) ? $Γ['global']['foo']['$this']['\u03A3'] : sec_lvl('$this', 'i', true, $Γ['global']['foo']);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['foo'].InvokedAsContr) {
        $Γ['global']['foo'].$this.Σ = $Γ['global']['foo'].$this.Σ >= $old_pc.l ? $Γ['global']['foo'].$this.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['foo'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
;
$tmp0 = foo.prototype;
$Γ['global']['$tmp0'] = sec_lvl('foo', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.getI = function () {
    var $tmp4;
    $Γ['global']['$tmp0']['getI']['$tmp4'] = 0;
    $tmp4 = this.i;
    $Γ['global']['$tmp0']['getI']['$tmp4'] = sec_lvl('$this', 'i', false, $Γ['global']['$tmp0']['getI']);
    $Γ['global']['$tmp0']['getI']['$tmp4'] instanceof Object ? $Γ['global']['$tmp0']['getI']['$tmp4'].Σ = $Γ['global']['$tmp0']['getI']['$tmp4'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['getI']['$tmp4'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['getI']['$tmp4'] = $Γ['global']['$tmp0']['getI']['$tmp4'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['getI']['$tmp4'] : $Λ[$Λ.length - 1].l;
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['$tmp0']['getI'], '$tmp4')['$tmp4'];
    if ($rx instanceof Object) {
        $rx.Σ = $rx.Σ >= $old_pc.l ? $rx.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['$tmp0']['getI'].InvokedAsContr) {
            $Γ['global']['$tmp0']['getI'].$this.Σ = $Γ['global']['$tmp0']['getI'].$this.Σ >= $old_pc.l ? $Γ['global']['$tmp0']['getI'].$this.Σ : $old_pc.l;
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['$tmp0']['getI'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l >= $rx ? $old_pc.l : $rx };
        }
    }
    return $tmp4;
};
$Γ['global']['$tmp0']['getI'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = pass.length;
$Γ['global']['$tmp1'] = sec_lvl('pass', 'length', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$rf = $scope($Γ['global'], 'foo', false)['foo'];
$rf.scope = $Γ['global'];
$rf.$this = {
    Σ: $Λ[$Λ.length - 1].l,
    __$proto__: $rf.prototype
};
$rf['i'] = sec_lvl('$tmp1', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp1', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$rf.InvokedAsContr = true;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
obj = new foo($tmp1);
$Γ['global']['obj'] = $Λ.pop().l;
$Γ['global']['obj'] instanceof Object ? $Γ['global']['obj'].Σ = $Γ['global']['obj'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['obj'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['obj'] = $Γ['global']['obj'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['obj'] : $Λ[$Λ.length - 1].l;
$rf = $prop('obj', 'getI', $Γ['global']);
$rf.scope = $scope($Γ['global'], 'obj', false)['obj'];
$rf.$this = $scope($Γ['global'], 'obj', false)['obj'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp3 = obj.getI();
$Γ['global']['$tmp3'] = $Λ.pop().l;
$Γ['global']['$tmp3'] instanceof Object ? $Γ['global']['$tmp3'].Σ = $Γ['global']['$tmp3'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3'] = $Γ['global']['$tmp3'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'] : $Λ[$Λ.length - 1].l;
$tmp2 = console.log($tmp3);