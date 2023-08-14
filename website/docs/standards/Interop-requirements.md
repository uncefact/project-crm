---
title: Interoperability Requirements
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Introduction

Some words about the need for digital traceability and the challenges about achieving it at scale. 

### Document Purpose

To provide the context and guide-rails for the technical deliverables such as credential schema and traceability vocabularies

### Audience 

The audience for this document include

Role | Rationale
--|--
Mining operators | 
Refiners & manufacturers |
ESG standards & certifiers |
Software vendors |
Regulators |

### Document Context

TBA

### Design Principles 

This document is guided by the following principles
1. Simple and implementable always wins over expansive & complex.
2. Open and free is a fundamental requirement.
3. Collaborative development encourages buy-in
4. Decentralised models will always be more scalable than centralised.

### Design Challenges

Implementating end-to-end supply chain traceability at scale faces a number of challenges. 

Challenge | Our approach 
-- | --
A plethora of platforms exist already | We must focus on in interoperability between systems, not picking winners.
Technology maturity is variable | We must accommodate small businesses and developing nations and allow a gradual transition from paper processes.
Most traceability pilots have not scaled to production volumes | We must design simple and scalable solutions that can be implemented at scale
Supply chain actors will not expose sensitve data | We must allow stakeholders to protect sensitive commercial information whilst revealing ESG info.
ESG claims have different levels of trust | We must provide sufficient evidence to trust the claims.
Greenwashing fraud is endemic | We need to explicitly identify greenwashing fraud vectors and how to solve them – including product substation, mass balance, etc.
Cost | The solution must be cheap enough that there remains plentiful margin incentive for producers and manufacturers to change behaviour.

### Scope 

Digital Interoperability standards for scalable traceability & transparency

* Supply chain events
* entity, product & location identifiers
* credential schema
* privacy & security controls
* linked data vocabularies

 
## Traceability Interoperability Requirements

## Traceability Data Model

This section should define a specific data model of the simplest possible EPCIS event structure and vocabulary that is just sufficient for end-to-end value chain traceability. Less is more because simple low cost implementation is key. Draw upon existing UN/CEFACT vocabulary.

### Transparency Data Model

This section should define the simplest possible data model for transparency information including 

* Sensors & measurements
* Standards & Criteria
* Audits & certificates
* Accreditations & trust
* Facilities, Equipment & capacity

### Identifier Schemes

This section should define prefered identity schemes for each type of identifier.

* Legal entities (national authority schemes?)
* Geographic locations (plus codes?)
* Manufactured products (GTIN?)
* Bulk product (?)
* Manufacturing facility / equipment (Asset ID)

### Verifiable Credentials

This section should define VC interoperability profiles and DID methods so that the complexity of this space is simplified to a simple and implementable subset.

* VC profiles - W3C SVIP, Hyperledger Aries, 
* DID methods for each identity type 

### Linked Credentials

This section should define a standard profile for linked credentials – ie how multiple credentials are linked together to construct a trustworthy supply chain traceability view.

* Link structure (target, type, role, etc)
* Link integrity (eg issuer of credential is subject of linked credential etc)
* Verifier behaviour (how to verify a graph of linked credentials as opposed to a single credential).

### Trust Anchors

Define methods by which trust & business integrity can be attached to ESG claims

* Trust anchors - authoritative roots of trust such as governments & national accreditation authorities. Eg Guarantee of origin certificates.
* Peer to peer - peer to peer trust networks (is community members keeping each other honest)

### Privacy Model

Define mechanisms to protect commercially sensitive information at any point in the value chain.

* Document level security - encrypted storage and shared single use keys
* Field level security - Selective redaction methods


### Technology Maturity

Designs to support stakeholders in the value chain that have zero technology maturity.

* Human Rendering templates
* QR links to hosted verifiers 

## Physical Digital Link

Design solution to verifiably link the digital data to the physical shipment..

* Finding ESG data from product ID using Digital Link resolvers
* Doscovering the right resolver service

### Provenance verification 

List known mechanisms for provenance verifiaction

* Chemical / Istopic fingerprints

## Sample Value Chain

Draw a simplified example for lithium/Cobalt/Copper -> EV Battery -> recycling.

