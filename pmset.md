[pmset man page](https://ss64.com/mac/pmset.html)

`pmset -g` read values

```
System-wide power settings:
 SleepDisabled          0
Currently in use:
 standby              1
 Sleep On Power Button 1
 hibernatefile        /var/vm/sleepimage
 powernap             1
 networkoversleep     0
 disksleep            10
 sleep                1 (sleep prevented by sharingd, coreaudiod, coreaudiod, coreaudiod, coreaudiod, useractivityd, cloudd, cloudd, cloudd, powerd)
 hibernatemode        3
 ttyskeepawake        1
 displaysleep         5
 tcpkeepalive         1
 lowpowermode         1
 womp                 0
 ```

Disable power nap & tcpkeepalive to save some battery while sleeping on battery

```shell
sudo pmset -a tcpkeepalive 0
sudo pmset -a powernap 0
```

(Disabling tcpkeepalive will make Find My Mac not function properly)