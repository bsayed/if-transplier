$Γ['global']['foo'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    pwd: $Λ[$Λ.length - 1].l
};
var pass, $tmp0, $tmp1;
$Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pass'] instanceof Object ? $Γ['global']['pass'].Σ = $Γ['global']['pass'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pass'] = $Γ['global']['pass'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'] : $Λ[$Λ.length - 1].l;
function foo(pwd) {
    this.i = pwd.length;
    $Γ['global']['foo']['$this']['i'] = sec_lvl('pwd', 'length', false, $Γ['global']['foo']);
    $Γ['global']['foo']['$this']['i'] instanceof Object ? $Γ['global']['foo']['$this']['i'].Σ = $Γ['global']['foo']['$this']['i'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$this']['i'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['foo']['$this']['i'] = $Γ['global']['foo']['$this']['i'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$this']['i'] : $Λ[$Λ.length - 1].l;
    $Γ['global']['foo']['$this']['\u03A3'] = $Γ['global']['foo']['$this']['\u03A3'] >= sec_lvl('global', 'i', true, $Γ['global']['foo']) ? $Γ['global']['foo']['$this']['\u03A3'] : sec_lvl('global', 'i', true, $Γ['global']['foo']);
    var $tmp2;
    $Γ['global']['foo']['$tmp2'] = 0;
    $tmp2 = 5;
    $Γ['global']['foo']['$tmp2'] = $Λ[$Λ.length - 1].l;
    $Γ['global']['foo']['$tmp2'] instanceof Object ? $Γ['global']['foo']['$tmp2'].Σ = $Γ['global']['foo']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['foo']['$tmp2'] = $Γ['global']['foo']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp2'] : $Λ[$Λ.length - 1].l;
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['foo'], '$tmp2')['$tmp2'];
    if ($rx instanceof Object) {
        $rx.Σ = $rx.Σ >= $old_pc.l ? $rx.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['foo'].InvokedAsContr) {
            $Γ['global']['foo'].$this.Σ = $Γ['global']['foo'].$this.Σ >= $old_pc.l ? $Γ['global']['foo'].$this.Σ : $old_pc.l;
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['foo'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp2;
}
$rf = $scope($Γ['global'], 'foo', false)['foo'];
$rf.scope = $Γ['global'];
$rf.$this = {
    Σ: $Λ[$Λ.length - 1].l,
    __$proto__: $rf.prototype
};
$rf['pwd'] = sec_lvl('pass', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('pass', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$rf.InvokedAsContr = true;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp = new foo(pass);
$Γ['global']['$tmp'] = $Λ.pop().l;
$Γ['global']['$tmp'] instanceof Object ? $Γ['global']['$tmp'].Σ = $Γ['global']['$tmp'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp'] = $Γ['global']['$tmp'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp'] : $Λ[$Λ.length - 1].l;
$tmp1 = $tmp['i'];
$Γ['global']['$tmp1'] = sec_lvl('$tmp', 'i', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp0 = console.log($tmp1);