switch(number) {
    case 1:
        self.dpsHealth -= monsterDamage;
        if(self.dpsHealth <= 0) {
            self.dpsHealth = 0;
            break;
        }
        self.turns.unshift({
            isPlayer: false,
            text: 'Monster attacks DPS for ' + monsterDamage + ' damage'
        })
        break;
    case 2:
        self.tankHealth -= monsterDamage;
        if(self.tankHealth <= 0) {
            self.tankHealth = 0;
            break;
        }
        self.turns.unshift({
            isPlayer: false,
            text: 'Mosnter attacks tank for ' + monsterDamage + ' damage'
        })
        break;
    case 3:
        self.healerHealth -= monsterDamage;
        if(self.healerHealth <= 0) {
            self.healerHealth = 0;
            break;
        }
        self.turns.unshift({
            isPlayer: false,
            text: 'Monster attacks healer for ' + monsterDamage + ' damage'
        })
        break;
}
//healer
if(self.tankHealth < self.dpsHealth && self.tankHealth < self.healerHealth && self.tankHealth > 0) {
    self.tankHealth += healerHeals;
        if(self.tankHealth > 100) {
            self.tankHealth = 100;
        }
    self.turns.unshift({
        isPlayer: true,
        text: 'Healer heals tank for ' + healerHeals + ' health'
    });
}
else if(self.dpsHealth < self.tankHealth && self.dpsHealth < self.healerHealth && self.dpsHealth > 0){
    self.dpsHealth += healerHeals;
        if(self.dpsHealth > 100) {
            self.dpsHealth = 100;
        }
    self.turns.unshift({
        isPlayer: true,
        text: 'Healer heals DPS for ' + healerHeals + ' health'
    })
}
else if(self.healerHealth < self.tankHealth && self.healerHealth < self.dpsHealth && self.healerHealth > 0) {
    self.healerHealth += healerHeals;
        if(self.healerHealth > 100) {
            self.healerHealth = 100;
        }
    self.turns.unshift({
        isPlayer: true,
        text: 'Healer heals healer for ' + healerHeals + ' health'
    })
}
/* switch(number) {
                case 1:
                    if(self.dpsHealth <= 0) {
                        number = self.calculateDamage(1,2);
                        if(number == 1) {
                            if(self.tankHealth <= 0) {
                                self.healerHealth -= monsterDamage;
                                if(self.healerHealth <= 0) {
                                    self.healerHealth = 0;   
                                }
                                break;
                            }
                            else {
                                self.tankHealth -= monsterDamage;
                                if(self.tankHealth <= 0) {
                                    self.tankHealth = 0;
                                }
                                break;

                            }
                        }
                        else {
                            if(self.healerHealth <= 0) {
                                self.tankHealth -= monsterDamage;
                                if(self.tankHealth <= 0) {
                                    self.tankHealth = 0;
                                }
                                break;
                            }
                            else {
                                self.healerHealth -= monsterDamage;
                                if(self.healerHealth <= 0) {
                                    self.healerHealth = 0;
                                }
                                break;
                            }
                        }    
                    }
                    else {
                        self.dpsHealth -= monsterDamage;
                    }
                        if(self.dpsHealth <= 0) {
                        self.dpsHealth = 0;
                        break;
                    }
                    self.turns.unshift({
                        isPlayer: false,
                        text: 'Monster attacks for ' + monsterDamage + ' damage'
                    })
                    break;
                case 2:
                    if(self.tankHealth <= 0) {
                        number = self.calculateDamage(1,2);
                        if(number == 1) {
                            if(self.dpsHealth <= 0) {
                                self.healerHealth -= monsterDamage;
                                if(self.healerHealth <= 0) {
                                    self.healerHealth = 0;   
                                }
                                break;
                            }
                            else {
                                self.dpsHealth -= monsterDamage;
                                if(self.dpsHealth <= 0) {
                                    self.dpsHealth = 0;
                                }
                                break;

                            }
                        }
                        else {
                            if(self.healerHealth <= 0) {
                                self.dpsHealth -= monsterDamage;
                                if(self.dpsHealth <= 0) {
                                    self.dpsHealth = 0;
                                }
                                break;
                            }
                            else {
                                self.healerHealth -= monsterDamage;
                                if(self.healerHealth <= 0) {
                                    self.healerHealth = 0;
                                }
                                break;
                            }
                        }    
                    }
                    else {
                        self.dpsHealth -= monsterDamage;
                    }
                        if(self.dpsHealth <= 0) {
                        self.dpsHealth = 0;
                        break;
                    }
                    self.turns.unshift({
                        isPlayer: false,
                        text: 'Monster attacks for ' + monsterDamage + ' damage'
                    })
                    break;
                case 3:
                    self.healerHealth -= monsterDamage;
                    if(self.healerHealth <= 0) {
                        self.healerHealth = 0;
                        break;
                    }
                    self.turns.unshift({
                        isPlayer: false,
                        text: 'Monster attacks healer for ' + monsterDamage + ' damage'
                    })
                    break;
                    --------------------------------------------------------------------
                         var arr = [];
                self.dpsHealth > 0 ? arr.push(self.dpsHealth) : arr.push(0);
                self.tankHealth > 0 ? arr.push(self.tankHealth) : arr.push(0);
                self.healerHealth > 0 ? arr.push(self.healerHealth) : arr.push(0);
                
                var randomNumber = self.randomNumberFn(0, arr.length -1);
                var check = true;
                console.log(randomNumber);
                while(check) {
                    if(arr[randomNumber] != 0) {
                        arr[randomNumber] -= monsterDamage;
                        self.dpsHealth = arr[0];
                        self.tankHealth = arr[1];
                        self.healerHealth = arr[2];
                        check = false;
                    }
                    else {
                        randomNumber = self.randomNumberFn(0, 2);
                        console.log(randomNumber, 'test');  
                    }
                }              
                arr = [];
            }*/