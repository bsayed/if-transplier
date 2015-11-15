$Γ['global']['outerfunction'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$Γ['global']['bar'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$Γ['global']['foo'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
var pass, $tmp0, $tmp1;
$Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = $Γ['global']['pass'] = 0;
pass = 'temp1234';
$Γ['global']['pass'] = $Λ[$Λ.length - 1].l;
$Γ['global']['pass'] instanceof Object ? $Γ['global']['pass'].Σ = $Γ['global']['pass'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['pass'] = $Γ['global']['pass'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['pass'] : $Λ[$Λ.length - 1].l;
function foo() {
    var $tmp2;
    $Γ['global']['foo']['$tmp2'] = 0;
    $tmp2 = console.log('Password Size is 8');
    $old_pc = $pc();
    while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
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
function bar() {
    var $tmp3;
    $Γ['global']['bar']['$tmp3'] = 0;
    $tmp3 = console.log('Password Size is NOT equal to 8');
    $old_pc = $pc();
    while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['bar'].InvokedAsContr) {
        $Γ['global']['bar'].$this.Σ = $Γ['global']['bar'].$this.Σ >= $old_pc.l ? $Γ['global']['bar'].$this.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['bar'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
function outerfunction() {
    var $tmp4, $tmp5;
    $Γ['global']['outerfunction']['$tmp5'] = $Γ['global']['outerfunction']['$tmp4'] = 0;
    $tmp5 = pass.length;
    $Γ['global']['outerfunction']['$tmp5'] = sec_lvl('pass', 'length', false, $Γ['global']['outerfunction']);
    $Γ['global']['outerfunction']['$tmp5'] instanceof Object ? $Γ['global']['outerfunction']['$tmp5'].Σ = $Γ['global']['outerfunction']['$tmp5'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp5'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['outerfunction']['$tmp5'] = $Γ['global']['outerfunction']['$tmp5'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp5'] : $Λ[$Λ.length - 1].l;
    $tmp4 = $tmp5 == 8;
    $Γ['global']['outerfunction']['$tmp4'] = sec_lvl('$tmp5', null, true, $Γ['global']['outerfunction']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp5', null, true, $Γ['global']['outerfunction']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['outerfunction']['$tmp4'] instanceof Object ? $Γ['global']['outerfunction']['$tmp4'].Σ = $Γ['global']['outerfunction']['$tmp4'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp4'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['outerfunction']['$tmp4'] = $Γ['global']['outerfunction']['$tmp4'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp4'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp4', null, true, $Γ['global']['outerfunction']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp4', null, true, $Γ['global']['outerfunction']),
        id: 'IF'
    });
    if ($tmp4) {
        $upgrade([
            'bar',
            '$tmp9',
            '$tmp8'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['outerfunction']);
        var $tmp6;
        $Γ['global']['outerfunction']['$tmp6'] = 0;
        $tmp6 = function () {
            var $tmp7;
            $Γ['global']['outerfunction']['$tmp6']['$tmp7'] = 0;
            $rf = $scope($Γ['global']['outerfunction']['$tmp6'], 'foo', false)['foo'];
            $rf.scope = $Γ['global']['outerfunction']['$tmp6'];
            $rf.$this = $Γ['global'];
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp7 = foo();
            $Γ['global']['outerfunction']['$tmp6']['$tmp7'] = $Λ.pop().l;
            $Γ['global']['outerfunction']['$tmp6']['$tmp7'] instanceof Object ? $Γ['global']['outerfunction']['$tmp6']['$tmp7'].Σ = $Γ['global']['outerfunction']['$tmp6']['$tmp7'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp6']['$tmp7'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['outerfunction']['$tmp6']['$tmp7'] = $Γ['global']['outerfunction']['$tmp6']['$tmp7'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp6']['$tmp7'] : $Λ[$Λ.length - 1].l;
            $old_pc = $pc();
            while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
                $Λ.pop();
            }
            if ($Γ['global']['outerfunction']['$tmp6'].InvokedAsContr) {
                $Γ['global']['outerfunction']['$tmp6'].$this.Σ = $Γ['global']['outerfunction']['$tmp6'].$this.Σ >= $old_pc.l ? $Γ['global']['outerfunction']['$tmp6'].$this.Σ : $old_pc.l;
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['outerfunction']['$tmp6'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
            return;
        };
        $Γ['global']['outerfunction']['$tmp6'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            scope: $Γ['global']['outerfunction']
        };
        $old_pc = $pc();
        while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['outerfunction'], '$tmp6')['$tmp6'];
        if ($rx instanceof Object) {
            $rx.Σ = $rx.Σ >= $old_pc.l ? $rx.Σ : $old_pc.l;
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['outerfunction'].InvokedAsContr) {
                $Γ['global']['outerfunction'].$this.Σ = $Γ['global']['outerfunction'].$this.Σ >= $old_pc.l ? $Γ['global']['outerfunction'].$this.Σ : $old_pc.l;
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['outerfunction'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l >= $rx ? $old_pc.l : $rx };
            }
        }
        return $tmp6;
    } else {
        $upgrade([
            'foo',
            '$tmp7',
            '$tmp6'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['outerfunction']);
        var $tmp8;
        $Γ['global']['outerfunction']['$tmp8'] = 0;
        $tmp8 = function () {
            var $tmp9;
            $Γ['global']['outerfunction']['$tmp8']['$tmp9'] = 0;
            $rf = $scope($Γ['global']['outerfunction']['$tmp8'], 'bar', false)['bar'];
            $rf.scope = $Γ['global']['outerfunction']['$tmp8'];
            $rf.$this = $Γ['global'];
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp9 = bar();
            $Γ['global']['outerfunction']['$tmp8']['$tmp9'] = $Λ.pop().l;
            $Γ['global']['outerfunction']['$tmp8']['$tmp9'] instanceof Object ? $Γ['global']['outerfunction']['$tmp8']['$tmp9'].Σ = $Γ['global']['outerfunction']['$tmp8']['$tmp9'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp8']['$tmp9'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['outerfunction']['$tmp8']['$tmp9'] = $Γ['global']['outerfunction']['$tmp8']['$tmp9'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['outerfunction']['$tmp8']['$tmp9'] : $Λ[$Λ.length - 1].l;
            $old_pc = $pc();
            while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
                $Λ.pop();
            }
            if ($Γ['global']['outerfunction']['$tmp8'].InvokedAsContr) {
                $Γ['global']['outerfunction']['$tmp8'].$this.Σ = $Γ['global']['outerfunction']['$tmp8'].$this.Σ >= $old_pc.l ? $Γ['global']['outerfunction']['$tmp8'].$this.Σ : $old_pc.l;
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['outerfunction']['$tmp8'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
            return;
        };
        $Γ['global']['outerfunction']['$tmp8'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            scope: $Γ['global']['outerfunction']
        };
        $old_pc = $pc();
        while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['outerfunction'], '$tmp8')['$tmp8'];
        if ($rx instanceof Object) {
            $rx.Σ = $rx.Σ >= $old_pc.l ? $rx.Σ : $old_pc.l;
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['outerfunction'].InvokedAsContr) {
                $Γ['global']['outerfunction'].$this.Σ = $Γ['global']['outerfunction'].$this.Σ >= $old_pc.l ? $Γ['global']['outerfunction'].$this.Σ : $old_pc.l;
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['outerfunction'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l >= $rx ? $old_pc.l : $rx };
            }
        }
        return $tmp8;
    }
    $comp({ 'lbl': 'FUNC' }, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $old_pc = $pc();
    while ($pc().id !== 'global' && $pc().id !== 'FUNC') {
        $Λ.pop();
    }
    if ($Γ['global']['outerfunction'].InvokedAsContr) {
        $Γ['global']['outerfunction'].$this.Σ = $Γ['global']['outerfunction'].$this.Σ >= $old_pc.l ? $Γ['global']['outerfunction'].$this.Σ : $old_pc.l;
        $Λ[$Λ.length - 1] = { 'l': $Γ['global']['outerfunction'].$this };
    } else {
        $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
    }
    return;
}
;
$rf = $scope($Γ['global'], 'outerfunction', false)['outerfunction'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp1 = outerfunction();
$Γ['global']['$tmp1'] = $Λ.pop().l;
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp0 = $tmp1();