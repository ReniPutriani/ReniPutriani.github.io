---
title: WebAssembly is great and I can't stop to not using it
excerpt: I understand that my blog currently not written in some esoteric language and not a single WASM features used, but.. hear me out.
publishDate: 'May 22 2024'
tags:
  - Opinion
  - WebAssembly
---

I understand that my blog currently not written in some esoteric language and not a single WASM features used, but.. hear me out.
I have been cooking a project using WASM over past few days and I think telling this too early could be an early axe to my portofolio
project, but I can't stop talking about this to other people. Like many other projects, it could be started with "What If" and the problem
context.

I have been an intern at a company with ~1500 employess for a little over 2 months. The security team had an interesting approach to
Learning Management Systems (LMS) solution. The LMS solution is actually internally maintained and curated by a small sub-team but, today
let's not talk about this weird decision made by our company and instead let's talk about how they implements the interactive tty terminal 
or how most of the tty on the web implemented.

Web TTYs usually implemented on the client side as forwarding on what's actual machine output by running them on (server-client) architecture.
If you don't have the resources to spawn multiple TTYs for concurrent users this leads to a "fake" TTY that runs on client entirely, usually
with quirks as it's not a 1:1 replication of what actual TTY/shell does. Thus, I _think_ we can actually compiles entire bintuils targeting
WASM to runs on browser. Yes, WASM have limited runtime capabilities than actual OS runtime, but ultimately we can stub/remove most of the features.

So, yeah, status update, I have been trying to compile binutils to target WASM for pas few days.