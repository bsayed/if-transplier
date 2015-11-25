var passLenLessThan8, o;
$Γ['global']['o'] = $Γ['global']['passLenLessThan8'] = 0;
o = { passLenLessThan8: false };
$Γ['global']['o'] = {
    __proto__: {},
    scope: $Γ['global'],
    passLenLessThan8: $Λ[$Λ.length - 1].l,
    Σ: $Λ[$Λ.length - 1].l
};
with (o) {
    var $tmp0, $tmp1;
    $Γ['global']['o']['$tmp1'] = $Γ['global']['o']['$tmp0'] = 0;
    $tmp1 = pwd.length;
    $Γ['global']['o']['$tmp1'] = sec_lvl('pwd', 'length', false, $Γ['global']['o']);
    $Γ['global']['o']['$tmp1'] instanceof Object ? $Γ['global']['o']['$tmp1'].Σ = $Γ['global']['o']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['o']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['o']['$tmp1'] = $Γ['global']['o']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['o']['$tmp1'] : $Λ[$Λ.length - 1].l;
    $tmp0 = $tmp1 < 8;
    $Γ['global']['o']['$tmp0'] = sec_lvl('$tmp1', null, true, $Γ['global']['o']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp1', null, true, $Γ['global']['o']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['o']['$tmp0'] instanceof Object ? $Γ['global']['o']['$tmp0'].Σ = $Γ['global']['o']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['o']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['o']['$tmp0'] = $Γ['global']['o']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['o']['$tmp0'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp0', null, true, $Γ['global']['o']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp0', null, true, $Γ['global']['o']),
        id: 'IF'
    });
    if ($tmp0) {
        passLenLessThan8 = true;
        $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'] = $Λ[$Λ.length - 1].l;
        $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'] instanceof Object ? $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'].Σ = $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'] = $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['o'], 'passLenLessThan8', true)['passLenLessThan8'] : $Λ[$Λ.length - 1].l;
    } else {
        $upgrade(['passLenLessThan8'], $Λ[$Λ.length - 1].l, $Γ['global']['o']);
    }
    $Λ.pop();
}