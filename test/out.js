$Γ['global']['rightAligned'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    n: $Λ[$Λ.length - 1].l,
    width: $Λ[$Λ.length - 1].l
};
$Γ['global']['range'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    m: $Λ[$Λ.length - 1].l,
    n: $Λ[$Λ.length - 1].l
};
$Γ['global']['colsSpacedRight'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    lstLines: $Λ[$Λ.length - 1].l,
    nColWidth: $Λ[$Λ.length - 1].l
};
$Γ['global']['floydIntegerLists'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    nRows: $Λ[$Λ.length - 1].l
};
$Γ['global']['main'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function main() {
    $Γ['global']['main']['$\u03BB0'] = {
        $fscope: $Λ[$Λ.length - 1].l,
        prototype: { Σ: $Λ[$Λ.length - 1].l },
        Σ: $Λ[$Λ.length - 1].l,
        scope: $Γ['global']['main'],
        lstN: $Λ[$Λ.length - 1].l
    };
    var nMargin, $tmp2, $λ0, $tmp3;
    $Γ['global']['main']['$tmp3'] = $Γ['global']['main']['$\u03BB0'] = $Γ['global']['main']['$tmp2'] = $Γ['global']['main']['nMargin'] = 0;
    nMargin = 1;
    $scope($Γ['global']['main'], 'nMargin', true)['nMargin'] = $Λ[$Λ.length - 1].l;
    $λ0 = function (lstN) {
        $Γ['global']['main']['$\u03BB0']['$tmp5'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            scope: $Γ['global']['main']['$\u03BB0'],
            nFloydRows: $Λ[$Λ.length - 1].l
        };
        var $tmp4, $tmp5;
        $Γ['global']['main']['$\u03BB0']['$tmp5'] = $Γ['global']['main']['$\u03BB0']['$tmp4'] = 0;
        $tmp5 = function (nFloydRows) {
            var lstRows, iLast, $tmp6, $tmp7, $tmp8, $tmp9;
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'] = $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'] = $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'] = $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'] = $Γ['global']['main']['$\u03BB0']['$tmp5']['iLast'] = $Γ['global']['main']['$\u03BB0']['$tmp5']['lstRows'] = 0;
            $rf = $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'floydIntegerLists', false)['floydIntegerLists'];
            $rf.scope = $Γ['global']['main']['$\u03BB0']['$tmp5'];
            $rf.$this = $Γ['global'];
            $rf['nRows'] = $lub(sec_lvl('nFloydRows', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            lstRows = floydIntegerLists(nFloydRows);
            $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'] = $Λ.pop().l;
            $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'] instanceof Object ? $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'].Σ = $lub($scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'] = $lub($scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'lstRows', true)['lstRows'], $Λ[$Λ.length - 1].l);
            iLast = nFloydRows - 1;
            $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'] = $lub(sec_lvl('nFloydRows', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']), $Λ[$Λ.length - 1].l);
            $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'] instanceof Object ? $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'].Σ = $lub($scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'] = $lub($scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'iLast', true)['iLast'], $Λ[$Λ.length - 1].l);
            $tmp9 = lstRows[iLast];
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'] = sec_lvl('lstRows', iLast, false, $Γ['global']['main']['$\u03BB0']['$tmp5']);
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'] instanceof Object ? $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'].Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'] = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp9'], $Λ[$Λ.length - 1].l);
            $tmp = $tmp9[iLast];
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'] = sec_lvl('$tmp9', iLast, false, $Γ['global']['main']['$\u03BB0']['$tmp5']);
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'] instanceof Object ? $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'].Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'] = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp'], $Λ[$Λ.length - 1].l);
            $tmp = $tmp.toString();
            $tmp8 = $tmp.length;
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'] = sec_lvl('$tmp', 'length', false, $Γ['global']['main']['$\u03BB0']['$tmp5']);
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'] instanceof Object ? $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'].Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'] = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp8'], $Λ[$Λ.length - 1].l);
            $tmp7 = $tmp8 + nMargin;
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'] = $lub(sec_lvl('$tmp8', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']), sec_lvl('nMargin', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']));
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'] instanceof Object ? $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'].Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'] = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp7'], $Λ[$Λ.length - 1].l);
            $rf = $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], 'colsSpacedRight', false)['colsSpacedRight'];
            $rf.scope = $Γ['global']['main']['$\u03BB0']['$tmp5'];
            $rf.$this = $Γ['global'];
            $rf['lstLines'] = $lub(sec_lvl('lstRows', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']), $Λ[$Λ.length - 1].l);
            $rf['nColWidth'] = $lub(sec_lvl('$tmp7', null, true, $Γ['global']['main']['$\u03BB0']['$tmp5']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp6 = colsSpacedRight(lstRows, $tmp7);
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'] = $Λ.pop().l;
            $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'] instanceof Object ? $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'].Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'] = $lub($Γ['global']['main']['$\u03BB0']['$tmp5']['$tmp6'], $Λ[$Λ.length - 1].l);
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['main']['$\u03BB0']['$tmp5'], '$tmp6')['$tmp6'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['main']['$\u03BB0']['$tmp5'].InvokedAsContr) {
                    $Γ['global']['main']['$\u03BB0']['$tmp5'].$this.Σ = $lub($Γ['global']['main']['$\u03BB0']['$tmp5'].$this.Σ, $old_pc.l);
                    $Λ[$Λ.length - 1] = { 'l': $Γ['global']['main']['$\u03BB0']['$tmp5'].$this };
                } else {
                    $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp6;
        };
        $tmp = lstN.map($tmp5);
        $tmp4 = $tmp.join('\n\n');
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['main']['$\u03BB0'], '$tmp4')['$tmp4'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['main']['$\u03BB0'].InvokedAsContr) {
                $Γ['global']['main']['$\u03BB0'].$this.Σ = $lub($Γ['global']['main']['$\u03BB0'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['main']['$\u03BB0'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp4;
    };
    $tmp3 = [
        5,
        14
    ];
    $Γ['global']['main']['$tmp3'] = {
        __proto__: {},
        scope: $Γ['global']['main'],
        0: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        1: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l),
        Σ: $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l)
    };
    $tmp2 = $λ0($tmp3);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['main'], '$tmp2')['$tmp2'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['main'].InvokedAsContr) {
            $Γ['global']['main'].$this.Σ = $lub($Γ['global']['main'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['main'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp2;
}
function floydIntegerLists(nRows) {
    $Γ['global']['floydIntegerLists']['$\u03BB1'] = {
        $fscope: $Λ[$Λ.length - 1].l,
        prototype: { Σ: $Λ[$Λ.length - 1].l },
        Σ: $Λ[$Λ.length - 1].l,
        scope: $Γ['global']['floydIntegerLists'],
        lstInt: $Λ[$Λ.length - 1].l,
        startWidth: $Λ[$Λ.length - 1].l
    };
    var $tmp10, $λ1, $tmp11, $tmp12, $tmp13, $tmp14, $tmp15, $tmp16, $tmp17;
    $Γ['global']['floydIntegerLists']['$tmp17'] = $Γ['global']['floydIntegerLists']['$tmp16'] = $Γ['global']['floydIntegerLists']['$tmp15'] = $Γ['global']['floydIntegerLists']['$tmp14'] = $Γ['global']['floydIntegerLists']['$tmp13'] = $Γ['global']['floydIntegerLists']['$tmp12'] = $Γ['global']['floydIntegerLists']['$tmp11'] = $Γ['global']['floydIntegerLists']['$\u03BB1'] = $Γ['global']['floydIntegerLists']['$tmp10'] = 0;
    $λ1 = function triangleNumbers(lstInt, startWidth) {
        var n, $tmp18, $tmp37, $tmp38;
        $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp18'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['n'] = 0;
        n = startWidth || 1;
        $scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'] = $lub(sec_lvl('startWidth', null, true, $Γ['global']['floydIntegerLists']['$\u03BB1']), $Λ[$Λ.length - 1].l);
        $scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'] instanceof Object ? $scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'].Σ = $lub($scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'].Σ, $Λ[$Λ.length - 1].l) : $scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'] = $lub($scope($Γ['global']['floydIntegerLists']['$\u03BB1'], 'n', true)['n'], $Λ[$Λ.length - 1].l);
        $tmp38 = lstInt.length;
        $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'] = sec_lvl('lstInt', 'length', false, $Γ['global']['floydIntegerLists']['$\u03BB1']);
        $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'] instanceof Object ? $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'].Σ = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'] = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp38'], $Λ[$Λ.length - 1].l);
        $tmp37 = n > $tmp38;
        $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'] = $lub(sec_lvl('n', null, true, $Γ['global']['floydIntegerLists']['$\u03BB1']), sec_lvl('$tmp38', null, true, $Γ['global']['floydIntegerLists']['$\u03BB1']));
        $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'] instanceof Object ? $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'].Σ = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'] = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp37'], $Λ[$Λ.length - 1].l);
        $Λ.push({
            l: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp37', null, true, $Γ['global']['floydIntegerLists']['$\u03BB1'])),
            id: 'IF'
        });
        if ($tmp37) {
            $upgrade([
                'lstInt.slice',
                '$tmp39',
                '$tmp',
                '$tmp41',
                'triangleNumbers',
                '$tmp40',
                '$tmp.concat',
                '$tmp18'
            ], $Λ[$Λ.length - 1].l, $Γ['global']['floydIntegerLists']['$\u03BB1']);
            $tmp18 = [];
            $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp18'] = {
                __proto__: {},
                scope: $Γ['global']['floydIntegerLists']['$\u03BB1'],
                Σ: $lub($Λ[$Λ.length - 1].l)
            };
        } else {
            $upgrade(['$tmp18'], $Λ[$Λ.length - 1].l, $Γ['global']['floydIntegerLists']['$\u03BB1']);
            var $tmp, $tmp39, $tmp40, $tmp41, $tmp42;
            $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp41'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp40'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp39'] = $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp'] = 0;
            $tmp39 = lstInt.slice(0, n);
            $tmp = [$tmp39];
            $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp'] = {
                __proto__: {},
                scope: $Γ['global']['floydIntegerLists']['$\u03BB1'],
                0: $lub($Λ[$Λ.length - 1].l, sec_lvl('$tmp39', null, false, $Γ['global']['floydIntegerLists']['$\u03BB1'])),
                Σ: $lub(sec_lvl('$tmp39', null, false, $Γ['global']['floydIntegerLists']['$\u03BB1']), $Λ[$Λ.length - 1].l)
            };
            $tmp41 = lstInt.slice(n);
            $tmp42 = n + 1;
            $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'] = $lub(sec_lvl('n', null, true, $Γ['global']['floydIntegerLists']['$\u03BB1']), $Λ[$Λ.length - 1].l);
            $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'] instanceof Object ? $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'].Σ = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'] = $lub($Γ['global']['floydIntegerLists']['$\u03BB1']['$tmp42'], $Λ[$Λ.length - 1].l);
            $tmp40 = triangleNumbers($tmp41, $tmp42);
            $tmp18 = $tmp.concat($tmp40);
        }
        $Λ.pop();
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['floydIntegerLists']['$\u03BB1'], '$tmp18')['$tmp18'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['floydIntegerLists']['$\u03BB1'].InvokedAsContr) {
                $Γ['global']['floydIntegerLists']['$\u03BB1'].$this.Σ = $lub($Γ['global']['floydIntegerLists']['$\u03BB1'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['floydIntegerLists']['$\u03BB1'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp18;
    };
    $tmp15 = nRows * nRows;
    $Γ['global']['floydIntegerLists']['$tmp15'] = $lub(sec_lvl('nRows', null, true, $Γ['global']['floydIntegerLists']), sec_lvl('nRows', null, true, $Γ['global']['floydIntegerLists']));
    $Γ['global']['floydIntegerLists']['$tmp15'] instanceof Object ? $Γ['global']['floydIntegerLists']['$tmp15'].Σ = $lub($Γ['global']['floydIntegerLists']['$tmp15'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$tmp15'] = $lub($Γ['global']['floydIntegerLists']['$tmp15'], $Λ[$Λ.length - 1].l);
    $tmp14 = $tmp15 / 2;
    $Γ['global']['floydIntegerLists']['$tmp14'] = $lub(sec_lvl('$tmp15', null, true, $Γ['global']['floydIntegerLists']), $Λ[$Λ.length - 1].l);
    $Γ['global']['floydIntegerLists']['$tmp14'] instanceof Object ? $Γ['global']['floydIntegerLists']['$tmp14'].Σ = $lub($Γ['global']['floydIntegerLists']['$tmp14'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$tmp14'] = $lub($Γ['global']['floydIntegerLists']['$tmp14'], $Λ[$Λ.length - 1].l);
    $tmp13 = Math.floor($tmp14);
    $tmp17 = nRows / 2;
    $Γ['global']['floydIntegerLists']['$tmp17'] = $lub(sec_lvl('nRows', null, true, $Γ['global']['floydIntegerLists']), $Λ[$Λ.length - 1].l);
    $Γ['global']['floydIntegerLists']['$tmp17'] instanceof Object ? $Γ['global']['floydIntegerLists']['$tmp17'].Σ = $lub($Γ['global']['floydIntegerLists']['$tmp17'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$tmp17'] = $lub($Γ['global']['floydIntegerLists']['$tmp17'], $Λ[$Λ.length - 1].l);
    $tmp16 = Math.ceil($tmp17);
    $tmp12 = $tmp13 + $tmp16;
    $Γ['global']['floydIntegerLists']['$tmp12'] = $lub(sec_lvl('$tmp13', null, true, $Γ['global']['floydIntegerLists']), sec_lvl('$tmp16', null, true, $Γ['global']['floydIntegerLists']));
    $Γ['global']['floydIntegerLists']['$tmp12'] instanceof Object ? $Γ['global']['floydIntegerLists']['$tmp12'].Σ = $lub($Γ['global']['floydIntegerLists']['$tmp12'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$tmp12'] = $lub($Γ['global']['floydIntegerLists']['$tmp12'], $Λ[$Λ.length - 1].l);
    $rf = $scope($Γ['global']['floydIntegerLists'], 'range', false)['range'];
    $rf.scope = $Γ['global']['floydIntegerLists'];
    $rf.$this = $Γ['global'];
    $rf['m'] = $lub($Λ[$Λ.length - 1].l, $Λ[$Λ.length - 1].l);
    $rf['n'] = $lub(sec_lvl('$tmp12', null, true, $Γ['global']['floydIntegerLists']), $Λ[$Λ.length - 1].l);
    $Λ.push({
        l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
        id: 'FUNC'
    });
    $tmp11 = range(1, $tmp12);
    $Γ['global']['floydIntegerLists']['$tmp11'] = $Λ.pop().l;
    $Γ['global']['floydIntegerLists']['$tmp11'] instanceof Object ? $Γ['global']['floydIntegerLists']['$tmp11'].Σ = $lub($Γ['global']['floydIntegerLists']['$tmp11'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['floydIntegerLists']['$tmp11'] = $lub($Γ['global']['floydIntegerLists']['$tmp11'], $Λ[$Λ.length - 1].l);
    $tmp10 = $λ1($tmp11);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['floydIntegerLists'], '$tmp10')['$tmp10'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['floydIntegerLists'].InvokedAsContr) {
            $Γ['global']['floydIntegerLists'].$this.Σ = $lub($Γ['global']['floydIntegerLists'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['floydIntegerLists'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp10;
}
function colsSpacedRight(lstLines, nColWidth) {
    $Γ['global']['colsSpacedRight']['$tmp20'] = {
        $fscope: $Λ[$Λ.length - 1].l,
        prototype: { Σ: $Λ[$Λ.length - 1].l },
        Σ: $Λ[$Λ.length - 1].l,
        scope: $Γ['global']['colsSpacedRight'],
        s: $Λ[$Λ.length - 1].l,
        line: $Λ[$Λ.length - 1].l
    };
    var $tmp19, $tmp20;
    $Γ['global']['colsSpacedRight']['$tmp20'] = $Γ['global']['colsSpacedRight']['$tmp19'] = 0;
    $tmp20 = function (s, line) {
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'] = {
            $fscope: $Λ[$Λ.length - 1].l,
            prototype: { Σ: $Λ[$Λ.length - 1].l },
            Σ: $Λ[$Λ.length - 1].l,
            scope: $Γ['global']['colsSpacedRight']['$tmp20'],
            n: $Λ[$Λ.length - 1].l
        };
        var $tmp21, $tmp22, $tmp23, $tmp24;
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'] = $Γ['global']['colsSpacedRight']['$tmp20']['$tmp23'] = $Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'] = $Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'] = 0;
        $tmp24 = function (n) {
            var $tmp25;
            $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'] = 0;
            $rf = $scope($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'], 'rightAligned', false)['rightAligned'];
            $rf.scope = $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'];
            $rf.$this = $Γ['global'];
            $rf['n'] = $lub(sec_lvl('n', null, true, $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']), $Λ[$Λ.length - 1].l);
            $rf['width'] = $lub(sec_lvl('nColWidth', null, true, $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']), $Λ[$Λ.length - 1].l);
            $Λ.push({
                l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
                id: 'FUNC'
            });
            $tmp25 = rightAligned(n, nColWidth);
            $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'] = $Λ.pop().l;
            $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'] instanceof Object ? $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'].Σ = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'] = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24']['$tmp25'], $Λ[$Λ.length - 1].l);
            $old_pc = $pc();
            while ($pc().id !== 'FUNC') {
                $Λ.pop();
            }
            $rx = $scope($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'], '$tmp25')['$tmp25'];
            if ($rx instanceof Object) {
                $rx.Σ = $lub($rx.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $rx };
            } else {
                if ($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'].InvokedAsContr) {
                    $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'].$this.Σ = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'].$this.Σ, $old_pc.l);
                    $Λ[$Λ.length - 1] = { 'l': $Γ['global']['colsSpacedRight']['$tmp20']['$tmp24'].$this };
                } else {
                    $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
                }
            }
            return $tmp25;
        };
        $tmp = line.map($tmp24);
        $tmp23 = $tmp.join('');
        $tmp22 = s + $tmp23;
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'] = $lub(sec_lvl('s', null, true, $Γ['global']['colsSpacedRight']['$tmp20']), sec_lvl('$tmp23', null, true, $Γ['global']['colsSpacedRight']['$tmp20']));
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'] instanceof Object ? $Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'].Σ = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'] = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp22'], $Λ[$Λ.length - 1].l);
        $tmp21 = $tmp22 + '\n';
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'] = $lub(sec_lvl('$tmp22', null, true, $Γ['global']['colsSpacedRight']['$tmp20']), $Λ[$Λ.length - 1].l);
        $Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'] instanceof Object ? $Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'].Σ = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'] = $lub($Γ['global']['colsSpacedRight']['$tmp20']['$tmp21'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['colsSpacedRight']['$tmp20'], '$tmp21')['$tmp21'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['colsSpacedRight']['$tmp20'].InvokedAsContr) {
                $Γ['global']['colsSpacedRight']['$tmp20'].$this.Σ = $lub($Γ['global']['colsSpacedRight']['$tmp20'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['colsSpacedRight']['$tmp20'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp21;
    };
    $tmp19 = lstLines.reduce($tmp20, '');
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['colsSpacedRight'], '$tmp19')['$tmp19'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['colsSpacedRight'].InvokedAsContr) {
            $Γ['global']['colsSpacedRight'].$this.Σ = $lub($Γ['global']['colsSpacedRight'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['colsSpacedRight'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp19;
}
function range(m, n) {
    $Γ['global']['range']['$tmp30'] = {
        $fscope: $Λ[$Λ.length - 1].l,
        prototype: { Σ: $Λ[$Λ.length - 1].l },
        Σ: $Λ[$Λ.length - 1].l,
        scope: $Γ['global']['range'],
        x: $Λ[$Λ.length - 1].l,
        i: $Λ[$Λ.length - 1].l
    };
    var $tmp26, $tmp27, $tmp28, $tmp29, $tmp30;
    $Γ['global']['range']['$tmp30'] = $Γ['global']['range']['$tmp29'] = $Γ['global']['range']['$tmp28'] = $Γ['global']['range']['$tmp27'] = $Γ['global']['range']['$tmp26'] = 0;
    $tmp29 = n - m;
    $Γ['global']['range']['$tmp29'] = $lub(sec_lvl('n', null, true, $Γ['global']['range']), sec_lvl('m', null, true, $Γ['global']['range']));
    $Γ['global']['range']['$tmp29'] instanceof Object ? $Γ['global']['range']['$tmp29'].Σ = $lub($Γ['global']['range']['$tmp29'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['range']['$tmp29'] = $lub($Γ['global']['range']['$tmp29'], $Λ[$Λ.length - 1].l);
    $tmp28 = $tmp29 + 1;
    $Γ['global']['range']['$tmp28'] = $lub(sec_lvl('$tmp29', null, true, $Γ['global']['range']), $Λ[$Λ.length - 1].l);
    $Γ['global']['range']['$tmp28'] instanceof Object ? $Γ['global']['range']['$tmp28'].Σ = $lub($Γ['global']['range']['$tmp28'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['range']['$tmp28'] = $lub($Γ['global']['range']['$tmp28'], $Λ[$Λ.length - 1].l);
    $tmp27 = Array($tmp28);
    $tmp = Array.apply(null, $tmp27);
    $tmp30 = function (x, i) {
        var $tmp31;
        $Γ['global']['range']['$tmp30']['$tmp31'] = 0;
        $tmp31 = m + i;
        $Γ['global']['range']['$tmp30']['$tmp31'] = $lub(sec_lvl('m', null, true, $Γ['global']['range']['$tmp30']), sec_lvl('i', null, true, $Γ['global']['range']['$tmp30']));
        $Γ['global']['range']['$tmp30']['$tmp31'] instanceof Object ? $Γ['global']['range']['$tmp30']['$tmp31'].Σ = $lub($Γ['global']['range']['$tmp30']['$tmp31'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['range']['$tmp30']['$tmp31'] = $lub($Γ['global']['range']['$tmp30']['$tmp31'], $Λ[$Λ.length - 1].l);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC') {
            $Λ.pop();
        }
        $rx = $scope($Γ['global']['range']['$tmp30'], '$tmp31')['$tmp31'];
        if ($rx instanceof Object) {
            $rx.Σ = $lub($rx.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $rx };
        } else {
            if ($Γ['global']['range']['$tmp30'].InvokedAsContr) {
                $Γ['global']['range']['$tmp30'].$this.Σ = $lub($Γ['global']['range']['$tmp30'].$this.Σ, $old_pc.l);
                $Λ[$Λ.length - 1] = { 'l': $Γ['global']['range']['$tmp30'].$this };
            } else {
                $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
            }
        }
        return $tmp31;
    };
    $tmp26 = $tmp.map($tmp30);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['range'], '$tmp26')['$tmp26'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['range'].InvokedAsContr) {
            $Γ['global']['range'].$this.Σ = $lub($Γ['global']['range'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['range'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp26;
}
function rightAligned(n, width) {
    var strN, $tmp32, $tmp33, $tmp34, $tmp35, $tmp36;
    $Γ['global']['rightAligned']['$tmp36'] = $Γ['global']['rightAligned']['$tmp35'] = $Γ['global']['rightAligned']['$tmp34'] = $Γ['global']['rightAligned']['$tmp33'] = $Γ['global']['rightAligned']['$tmp32'] = $Γ['global']['rightAligned']['strN'] = 0;
    strN = n.toString();
    $tmp36 = strN.length;
    $Γ['global']['rightAligned']['$tmp36'] = sec_lvl('strN', 'length', false, $Γ['global']['rightAligned']);
    $Γ['global']['rightAligned']['$tmp36'] instanceof Object ? $Γ['global']['rightAligned']['$tmp36'].Σ = $lub($Γ['global']['rightAligned']['$tmp36'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['rightAligned']['$tmp36'] = $lub($Γ['global']['rightAligned']['$tmp36'], $Λ[$Λ.length - 1].l);
    $tmp35 = width - $tmp36;
    $Γ['global']['rightAligned']['$tmp35'] = $lub(sec_lvl('width', null, true, $Γ['global']['rightAligned']), sec_lvl('$tmp36', null, true, $Γ['global']['rightAligned']));
    $Γ['global']['rightAligned']['$tmp35'] instanceof Object ? $Γ['global']['rightAligned']['$tmp35'].Σ = $lub($Γ['global']['rightAligned']['$tmp35'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['rightAligned']['$tmp35'] = $lub($Γ['global']['rightAligned']['$tmp35'], $Λ[$Λ.length - 1].l);
    $tmp34 = $tmp35 + 1;
    $Γ['global']['rightAligned']['$tmp34'] = $lub(sec_lvl('$tmp35', null, true, $Γ['global']['rightAligned']), $Λ[$Λ.length - 1].l);
    $Γ['global']['rightAligned']['$tmp34'] instanceof Object ? $Γ['global']['rightAligned']['$tmp34'].Σ = $lub($Γ['global']['rightAligned']['$tmp34'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['rightAligned']['$tmp34'] = $lub($Γ['global']['rightAligned']['$tmp34'], $Λ[$Λ.length - 1].l);
    $tmp = Array($tmp34);
    $tmp33 = $tmp.join(' ');
    $tmp32 = $tmp33 + strN;
    $Γ['global']['rightAligned']['$tmp32'] = $lub(sec_lvl('$tmp33', null, true, $Γ['global']['rightAligned']), sec_lvl('strN', null, true, $Γ['global']['rightAligned']));
    $Γ['global']['rightAligned']['$tmp32'] instanceof Object ? $Γ['global']['rightAligned']['$tmp32'].Σ = $lub($Γ['global']['rightAligned']['$tmp32'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['rightAligned']['$tmp32'] = $lub($Γ['global']['rightAligned']['$tmp32'], $Λ[$Λ.length - 1].l);
    $old_pc = $pc();
    while ($pc().id !== 'FUNC') {
        $Λ.pop();
    }
    $rx = $scope($Γ['global']['rightAligned'], '$tmp32')['$tmp32'];
    if ($rx instanceof Object) {
        $rx.Σ = $lub($rx.Σ, $old_pc.l);
        $Λ[$Λ.length - 1] = { 'l': $rx };
    } else {
        if ($Γ['global']['rightAligned'].InvokedAsContr) {
            $Γ['global']['rightAligned'].$this.Σ = $lub($Γ['global']['rightAligned'].$this.Σ, $old_pc.l);
            $Λ[$Λ.length - 1] = { 'l': $Γ['global']['rightAligned'].$this };
        } else {
            $Λ[$Λ.length - 1] = { 'l': $old_pc.l };
        }
    }
    return $tmp32;
}
var $tmp0, $tmp1;
$Γ['global']['$tmp1'] = $Γ['global']['$tmp0'] = 0;
$rf = $scope($Γ['global'], 'main', false)['main'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $lub($rf.$fscope, $Λ[$Λ.length - 1].l, $rf.Σ),
    id: 'FUNC'
});
$tmp1 = main();
$Γ['global']['$tmp1'] = $Λ.pop().l;
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $lub($Γ['global']['$tmp1'].Σ, $Λ[$Λ.length - 1].l) : $Γ['global']['$tmp1'] = $lub($Γ['global']['$tmp1'], $Λ[$Λ.length - 1].l);
$tmp0 = console.log($tmp1);