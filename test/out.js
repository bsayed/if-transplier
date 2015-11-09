$Γ['global']['chkpassword'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    pwd: $Λ[$Λ.length - 1].l
};
var pass, $tmp0;
$Γ['global']['$tmp0'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$rf = $scope($Γ['global'], 'chkpassword', false)['chkpassword'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$rf['pwd'] = sec_lvl('pass', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('pass', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp0 = chkpassword(pass);
$Γ['global']['$tmp0'] = $Λ.pop().l;
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
function chkpassword(pwd) {
    var i;
    $Γ['global']['chkpassword']['i'] = 0;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l,
        id: 'LOOP'
    });
    for (i in pwd) {
        var $tmp1, $tmp2;
        $Γ['global']['chkpassword']['$tmp2'] = $Γ['global']['chkpassword']['$tmp1'] = 0;
        $tmp2 = pwd[i];
        $Γ['global']['chkpassword']['$tmp2'] = sec_lvl('pwd', i, false, $Γ['global']['chkpassword']);
        $Γ['global']['chkpassword']['$tmp2'] instanceof Object ? $Γ['global']['chkpassword']['$tmp2'].Σ = $Γ['global']['chkpassword']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['chkpassword']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['chkpassword']['$tmp2'] = $Γ['global']['chkpassword']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['chkpassword']['$tmp2'] : $Λ[$Λ.length - 1].l;
        $tmp1 = console.log($tmp2);
    }
    $upgrade(['$tmp1'], $Λ[$Λ.length - 1].l, $Γ['global']['chkpassword']);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['chkpassword'].InvokedAsContr) {
        $Γ['global']['chkpassword'].$this.Σ = $Γ['global']['chkpassword'].$this.Σ >= $old_pc.l ? $Γ['global']['chkpassword'].$this.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['chkpassword'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}