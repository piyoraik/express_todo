# ~/.bashrc: executed by bash(1) for non-login shells.
export LANG=ja_JP.UTF-8

# Note: PS1 and umask are already set in /etc/profile. You should not
# need this unless you want different defaults for root.
 PS1='${debian_chroot:+($debian_chroot)}\h:\w\$ '
# umask 022

# You may uncomment the following lines if you want `ls' to be colorized:
# export LS_OPTIONS='--color=auto'
# eval "`dircolors`"
 alias ls='ls $LS_OPTIONS'
 alias ll='ls $LS_OPTIONS -la'
 alias l='ls $LS_OPTIONS -lA'
 alias rs='rails s -b 0.0.0.0'
 alias bi='bundle install'
 alias rr='rails routes'
#
# Some more alias to avoid making mistakes:
# alias rm='rm -i'
# alias cp='cp -i'
# alias mv='mv -i'
export LANG=ja_JP.UTF-8
