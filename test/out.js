var pass, x, y, $tmp0, $tmp1, $tmp2, $tmp3;
$Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['y'] = $Γ['global']['x'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pass'] instanceof Object ? $Γ['global']['pass'].Σ = $Γ['global']['pass'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pass'] = $Γ['global']['pass'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'] : $Λ[$Λ.length - 1].l;
x = {};
$Γ['global']['x'] = {
    __proto__: {},
    scope: $Γ['global'],
    Σ: $Λ[$Λ.length - 1].l
};
y = x;
$Γ['global']['y'] = sec_lvl('x', null, false, $Γ['global']);
$Γ['global']['y'] instanceof Object ? $Γ['global']['y'].Σ = $Γ['global']['y'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['y'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['y'] = $Γ['global']['y'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['y'] : $Λ[$Λ.length - 1].l;
x.i = true;
$Γ['global']['x']['i'] = $Λ[$Λ.length - 1].l;
$Γ['global']['x']['i'] instanceof Object ? $Γ['global']['x']['i'].Σ = $Γ['global']['x']['i'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['x']['i'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['x']['i'] = $Γ['global']['x']['i'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['x']['i'] : $Λ[$Λ.length - 1].l;
$scope($Γ['global'], 'x', false)['x']['\u03A3'] = $scope($Γ['global'], 'x', false)['x']['\u03A3'] >= sec_lvl('x', 'i', true, $Γ['global']) ? $scope($Γ['global'], 'x', false)['x']['\u03A3'] : sec_lvl('x', 'i', true, $Γ['global']);
$tmp1 = pass.length;
$Γ['global']['$tmp1'] = sec_lvl('pass', 'length', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp0 = $tmp1 == 8;
$Γ['global']['$tmp0'] = sec_lvl('$tmp1', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp1', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$Λ.push({
    l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp0', null, true, $Γ['global']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp0', null, true, $Γ['global']),
    id: 'IF'
});
if ($tmp0) {
    var $tmp4;
    $Γ['global']['$tmp4'] = 0;
    $tmp4 = delete y.i;
    $Γ['global']['y']['i'] = sec_lvl('y', 'i', false, $Γ['global']);
    $Γ['global']['y']['i'] instanceof Object ? $Γ['global']['y']['i'].Σ = $Γ['global']['y']['i'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['y']['i'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['y']['i'] = $Γ['global']['y']['i'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['y']['i'] : $Λ[$Λ.length - 1].l;
    $scope($Γ['global'], 'y', false)['y']['\u03A3'] = $scope($Γ['global'], 'y', false)['y']['\u03A3'] >= sec_lvl('y', 'i', true, $Γ['global']) ? $scope($Γ['global'], 'y', false)['y']['\u03A3'] : sec_lvl('y', 'i', true, $Γ['global']);
} else {
}
$Λ.pop();
$tmp3 = x.i;
$Γ['global']['$tmp3'] = sec_lvl('x', 'i', false, $Γ['global']);
$Γ['global']['$tmp3'] instanceof Object ? $Γ['global']['$tmp3'].Σ = $Γ['global']['$tmp3'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3'] = $Γ['global']['$tmp3'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'] : $Λ[$Λ.length - 1].l;
$tmp2 = $tmp3 == undefined;
$Γ['global']['$tmp2'] = sec_lvl('$tmp3', null, true, $Γ['global']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp3', null, true, $Γ['global']) : $Λ[$Λ.length - 1].l;
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $Γ['global']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2'] = $Γ['global']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'] : $Λ[$Λ.length - 1].l;
$Λ.push({
    l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp2', null, true, $Γ['global']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp2', null, true, $Γ['global']),
    id: 'IF'
});
if ($tmp2) {
    var $tmp5;
    $Γ['global']['$tmp5'] = 0;
    $tmp5 = console.log(8);
} else {
    $upgrade(['$tmp5'], $Λ[$Λ.length - 1].l, $Γ['global']);
}
$Λ.pop();