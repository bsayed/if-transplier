$Γ['global']['foo'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    pwd: $Λ[$Λ.length - 1].l
};
var pass, pwdLengthGreaterThan10, $tmp0, $tmp1;
$Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['pwdLengthGreaterThan10'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pass'] instanceof Object ? $Γ['global']['pass'].Σ = $Γ['global']['pass'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pass'] = $Γ['global']['pass'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'] : $Λ[$Λ.length - 1].l;
pwdLengthGreaterThan10 = true;
$Γ['global']['pwdLengthGreaterThan10'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pwdLengthGreaterThan10'] instanceof Object ? $Γ['global']['pwdLengthGreaterThan10'].Σ = $Γ['global']['pwdLengthGreaterThan10'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pwdLengthGreaterThan10'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pwdLengthGreaterThan10'] = $Γ['global']['pwdLengthGreaterThan10'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pwdLengthGreaterThan10'] : $Λ[$Λ.length - 1].l;
function foo(pwd) {
    $Λ.push({
        l: $Λ[$Λ.length - 1].l,
        id: 'IF'
    });
    if (true) {
        $Λ.push({
            l: $Λ[$Λ.length - 1].l,
            id: 'IF'
        });
        if (true) {
            var $tmp2, $tmp3;
            $Γ['global']['foo']['$tmp3'] = $Γ['global']['foo']['$tmp2'] = 0;
            $tmp3 = pwd.length;
            $Γ['global']['foo']['$tmp3'] = sec_lvl('pwd', 'length', false, $Γ['global']['foo']);
            $Γ['global']['foo']['$tmp3'] instanceof Object ? $Γ['global']['foo']['$tmp3'].Σ = $Γ['global']['foo']['$tmp3'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp3'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['foo']['$tmp3'] = $Γ['global']['foo']['$tmp3'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp3'] : $Λ[$Λ.length - 1].l;
            $tmp2 = $tmp3 > 10;
            $Γ['global']['foo']['$tmp2'] = sec_lvl('$tmp3', null, true, $Γ['global']['foo']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp3', null, true, $Γ['global']['foo']) : $Λ[$Λ.length - 1].l;
            $Γ['global']['foo']['$tmp2'] instanceof Object ? $Γ['global']['foo']['$tmp2'].Σ = $Γ['global']['foo']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['foo']['$tmp2'] = $Γ['global']['foo']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['foo']['$tmp2'] : $Λ[$Λ.length - 1].l;
            $Λ.push({
                l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp2', null, true, $Γ['global']['foo']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp2', null, true, $Γ['global']['foo']),
                id: 'IF'
            });
            if ($tmp2) {
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
            } else {
            }
            $comp({ 'lbl': 'FUNC' }, $Λ[$Λ.length - 1].l);
            $Λ.pop();
        } else {
        }
        $Λ.pop();
        pwdLengthGreaterThan10 = false;
        $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'] = $Λ[$Λ.length - 1].l;
        $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'] instanceof Object ? $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'].Σ = $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'] = $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['foo'], 'pwdLengthGreaterThan10', true)['pwdLengthGreaterThan10'] : $Λ[$Λ.length - 1].l;
    } else {
    }
    $Λ.pop();
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
$rf = $scope($Γ['global'], 'foo', false)['foo'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$rf['pwd'] = sec_lvl('pass', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('pass', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp0 = foo(pass);
$Γ['global']['$tmp0'] = $Λ.pop().l;
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp1 = console.log(pwdLengthGreaterThan10);