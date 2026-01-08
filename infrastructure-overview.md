# Infrastructure Overview

This document explains how each AWS service is used and why it exists in the architecture.

---

## IAM
Used to assign role-based permissions to EC2 instances.
No access keys are stored inside servers.

---

## EC2
Runs Dockerized Express.js application.
Instances are stateless and disposable.

---

## Application Load Balancer (ALB)
Acts as the single entry point.
Routes HTTP traffic.
Performs health checks.

---

## Target Groups
Maintain a live list of healthy EC2 instances.
ALB routes traffic only to healthy targets.

---

## Auto Scaling Group
Automatically replaces unhealthy instances.
Scales based on demand.

---

## Security Groups
Control inbound and outbound traffic.
Only ALB can reach EC2 on HTTP.
