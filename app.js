new Vue ({
    el: "#app",
    data: {
        tankHealth: 100,
        healerHealth: 100,
        dpsHealth: 100,
        monsterHealth: 200,
        gameRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() {
           
           this.gameRunning = true;
           this.tankHealth = 100;
           this.healerHealth = 100;
           this.dpsHealth = 100;
           this.monsterHealth = 200;
           this.turns = [];
           var self = this;
           
            var timerId = setInterval(function() {
                // dps attacks
                if(self.dpsHealth > 0) {           
                    var dpsDamage = self.calculateDamage(1,1);
                    var critDamageDps = self.calculateDamage(1,1)
                    var critChanceDps = self.randomNumberFn(1,10);
                    if(critChanceDps === 1) {
                        self.monsterHealth -= critDamageDps;
                        self.turns.unshift({
                        isPlayer: true,
                        text: 'Dps crits monster for ' + critDamageDps + ' points'
                        });
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                    }
                    else {
                        self.monsterHealth -= dpsDamage;
                        self.turns.unshift({
                            isPlayer: true,
                            text: 'Dps hits monster for ' + dpsDamage + ' points'
                        });
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                    }
                }

                // tank attacks
                if(self.tankHealth > 0) {
                    var tankDamage = self.calculateDamage(1,1);
                    var critDamageTank = self.calculateDamage(1,1)
                    var critChanceTank = self.randomNumberFn(1,10);
                    if(critChanceTank === 1) {
                        self.monsterHealth -= critDamageTank;
                        self.turns.unshift({
                        isPlayer: true,
                        text: 'Dps crits monster for ' + critDamageTank + ' points'
                        });
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                    }
                    else {
                        self.monsterHealth -= tankDamage;
                        self.turns.unshift({
                            isPlayer: true,
                            text: 'Tank hits monster for ' + tankDamage + ' points'
                        });
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                    }
                }

                // healer heals
                if(self.healerHealth > 0) {
                    var healerHeals = self.randomNumberFn(100,200);
                    let livingPlayers = [];
                    if(self.dpsHealth > 0) {
                        livingPlayers.push({name:'dpsHealth', health:self.dpsHealth});
                    }
                    if(self.tankHealth > 0) {
                        livingPlayers.push({name:'tankHealth', health:self.tankHealth});
                    }
                    if(self.healerHealth > 0) {
                        livingPlayers.push({name:'healerHealth', health:self.healerHealth});
                    }
                    var playerToHeal = {name:'test', health: 100};
                    livingPlayers.forEach(livingPlayer => {
                        if(livingPlayer.health < playerToHeal.health) {
                            playerToHeal = livingPlayer;
                        }   
                        }
                    );
                    if(playerToHeal.name === 'dpsHealth') {
                        self.dpsHealth += healerHeals;
                        if(self.dpsHealth > 100) {
                            self.dpsHealth = 100;
                        }
                        self.turns.unshift({
                        isPlayer: true,
                        text: 'Healer heals DPS for ' + healerHeals + ' health'
                    })
                    }
                    if(playerToHeal.name === 'tankHealth') {
                        self.tankHealth += healerHeals;
                        if(self.tankHealth > 100) {
                            self.tankHealth = 100;
                        }
                        self.turns.unshift({
                        isPlayer: true,
                        text: 'Healer heals tank for ' + healerHeals + ' health'
                    });
                    }
                    if(playerToHeal.name === 'healerHealth') {
                        self.healerHealth += healerHeals;
                        if(self.healerHealth > 100) {
                            self.healerHealth = 100;    
                        }
                        self.turns.unshift({
                            isPlayer: true,
                            text: 'Healer heals healer for ' + healerHeals + ' health'
                        })
                    }
                }
                // Monster attacks
                var monsterDamage = self.randomNumberFn(20,33);
                    let livingHumans = []; 

                    if(self.dpsHealth > 0) {
                        livingHumans.push({name:'dpsHealth', health:self.dpsHealth});
                    }
                    if(self.tankHealth > 0) {
                        livingHumans.push({name:'tankHealth', health:self.tankHealth});
                    }
                    if(self.healerHealth > 0) {
                        livingHumans.push({name:'healerHealth', health:self.healerHealth});
                    }
                    let number = self.randomNumberFn(0, livingHumans.length - 1)
                    var critChanceMonster = self.calculateDamage(1,10);
                    if(critChanceMonster === 1) {
                        console.log(1);
                        self.dpsHealth -= 20
                        if(self.dpsHealth <= 0) {
                            self.dpsHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                        self.tankHealth -= 20
                        if(self.tankHealth <= 0) {
                            self.tankHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                        self.healerHealth -= 20
                        if(self.healerHealth <= 0) {
                            self.healerHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                    }
                    if(livingHumans[number].name === 'dpsHealth') {
                        self.dpsHealth -= monsterDamage;
                        if(self.dpsHealth <= 0) {
                            self.dpsHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                        self.turns.unshift({
                            isPlayer: false,
                            text: 'Monster hits dps for ' + monsterDamage + ' damage'
                        })
                    }
                    if(livingHumans[number].name === 'tankHealth') {
                        self.tankHealth -= monsterDamage;
                        if(self.tankHealth <= 0) {
                            self.tankHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                        self.turns.unshift({
                            isPlayer: false,
                            text: 'Monster hits tank for ' + monsterDamage + ' damage'
                        })
                    }
                    if(livingHumans[number].name === 'healerHealth') {
                        self.healerHealth -= monsterDamage;
                        if(self.healerHealth <= 0) {
                            self.healerHealth = 0
                        }
                        if(self.checkWin()) {
                            clearInterval(timerId);
                        }
                        self.turns.unshift({
                            isPlayer: false,
                            text: 'Monster hits healer for ' + monsterDamage + ' damage'
                        })
                    }
            }, 1000)
        
            // setInterval(function() {
            //     // Aloe damage
            //     if(self.tankHealth > 0) {
            //         self.tankHealth -= 5;
            //     }
            //     if(self.dpsHealth > 0) {
            //         self.dpsHealth -= 5;
            //     }
            //     if(self.healerHealth > 0) {
            //         self.healerHealth -= 5;
            //     }
            // }, 300)
        
        },
        giveUp: function() {
            this.gameRunning = false;
        },
        randomNumberFn: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        calculateDamage: function(min, max) {
            return damage = Math.max(parseInt(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                alert('You have won')
                this.monsterHealth = 0;
                this.gameRunning = false;
                return true;
            } else if(this.dpsHealth === 0 && this.tankHealth === 0 && this.healerHealth === 0) {
                alert('You have lost the game')
                this.dpsHealth = 0;
                this.healerHealth = 0;
                this.tankHealth = 0;
                this.gameRunning = false;
                return true;
            }
            return false;
        }
    }
});