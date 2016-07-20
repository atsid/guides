# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.box = "ubuntu-cloud-images/trusty64"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  # VM tuning
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    vb.memory = 2048
    vb.cpus = 4
  end

  # Forward server ports from guest to host
  config.vm.network "forwarded_port", guest: 4000, host: 4000

  # Handy jekyll alias to include open host
  config.vm.provision :shell, inline: 'echo "alias serve=\"jekyll serve --host 0.0.0.0\"" >> .bashrc'

  # Shared folders with NFS
  config.vm.network :private_network, type: "dhcp"
  config.vm.synced_folder '.', '/vagrant', nfs: true
  config.vm.synced_folder "salt/roots/", "/srv/salt", nfs: true

  # SSH agent forwarding
  config.ssh.forward_agent = true

  # Provision with salt
  config.vm.provision :salt do |salt|
    salt.bootstrap_options = "-F -c /tmp -P"
    salt.minion_config = "salt/minion"
    salt.run_highstate = true
    salt.verbose = true
  end
end