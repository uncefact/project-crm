---
title: Interoperability Requirements
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Introduction
Traceability Interoperability for the Critical Raw Materials (CRM) industry has the opportunity to help consumers, manufacturers and miners share data up, down and across the supply chain in a consistent low cost way. We also seek to provide genuine accountability and the potential for independent validation of all types of claims in the supply chain.


Critical Raw Materials (CRM) are paramount to the functioning of our industrial ecosystems (digital, transport, construction, renewable energy technologies, lightweight batteries).  They are essential for the green energy transition.(lithium in batteries, gallium and indium in LED lamps, and rare-earth elements in magnets for digital technologies, electric vehicles and wind generators.)  Such elements derived from raw minerals are “critical” as they represent the most economically important source materials with high supply risk and they are concentrated in a few geographical areas. Additionally, The international CRM supply chain is growing in complexity at the same time as nation states seek to improve their border compliance for imports and facilitate access to export markets for their domestic producers. The global value chain is highly dependent on smooth cross-border supply flows (tangible, intangible and data).  

There is a significant commercial shift occurring in the expectations for high quality, provable credentials for ESG activities and provenance validation.  The companies that are able to demonstrate provable claims about their material sourcing and ESG activities will have easier access to markets and capital.  The value of traceability interoperability is to drive down the cost of sharing and demonstrating high quality credentials for provenance claims and  ESG activities.  By providing standards for granular, provable claims that enable independent validation and assessment, companies that are genuinely in compliance will be easily distinguished from those that cannot be validated.  

### Document Purpose

The  purpose of this document is to define the requirements for traceability interoperability.
This work stream is intended to answer the “How” for data exchange and the sustainability working group is answering the “What” data to exchange.

This document also provides the context and guide-rails for the technical deliverables for the CRM pilots such as credential schema and traceability vocabularies to drive the adoption of traceability standards that enable verifiable claims.

### Audience 

The primary audience for this document include the following:

Role | Rationale
--|--
Mining operators | The mining operators are the start of the value chain and for the operators that are generating the origin claims and investing in ESG activities it will be important that they can provably demonstrate their activities so that they can access markets and capital that value those investments in ESG outcomes. 
Refiners & manufacturers | The key challenges we’ll be focusing on for refiners and manufacturers will be how they demonstrate the provenance claims and ESG features of the inputs to the products that they produce and how the credentials about those inputs are 'attached' to the goods that they are producing.
ESG standards & certifiers | The value of the standard and/or certifications are tied directly to the value the market places of having a trustable proof that the good or services meets the standard.  A verifiable certificate provides this proof.  The certification and accreditation community create an important trust anchor.
Software vendors | Sharing digital credentials about the material origin and ESG of data of the CRM industry is going to be powered by the digital tools that members of the supply chain use.  This paper is intended to articulate how software vendors can extend their existing infrastructure in a low cost and scalable manner to support the industry.
Government organizations | when governments  subsidise the critical minerals for strategic or national interest purposes, proof that the national interest has been met could be provided by leveraging verifiable certificate that provides the proof of the benefit.
Regulators | Regulators play a unique role in any value chain.  They can be a trust anchor that helps their regulated community outcompete in a global marketplace. However, regulators require traceability in order to be effective. This paper will highlight principles to enable regulators to require verifiable and enforceable standards, by providing a model to corroborate and authenticate claims effectively.
People | Impacts on people are generally the fundamental driver of regulatory standards. By having an avenue to weigh in on the validation process of claims, people impacted can have some leverage to ensure that regulations are followed in alignment with their original purpose.  By providing evidence driven pathways for people to participate, it may be that conflicts of interest can be channeled productively into evidence gathering.

### Document Context

The focus of this document is traceability interoperability of the critical raw materials industry.  In addition there is parallel work going in in Recommendation 49 about transparency at scale that this document will inform and we will seek guidance from.  It is important that traceability interoperability works for the CRM industry in the same way as it works in adjacent and upstream industries.

### Design Principles 

This document is guided by the following principles
1. Simple and implementable always wins over expansive & complex.
2. Open and free is a fundamental requirement.
3. Collaborative development encourages buy-in
4. Decentralised models will always be more scalable than centralised.
5. Independently verifiable claims are more credible.
6. Learn and leverage from existing ecosystems, methodologies, standards and approaches.

### Design Challenges

Implementing end-to-end supply chain traceability at scale faces a number of challenges. 

Challenge | Our approach 
-- | --
A plethora of platforms exist already | We must focus on interoperability between systems, not picking winners.  We’ll also provide guidance on how existing systems can extend their capability to support interoperability. 
Technology maturity is variable | We must accommodate small businesses and developing nations and allow a gradual transition from paper processes.
Most traceability pilots have not scaled to production volumes | We must design simple and scalable solutions that can be implemented at scale
Supply chain actors will not expose sensitive data | We must allow stakeholders to protect sensitive commercial information whilst revealing ESG info.
ESG claims have different levels of trust | We must provide sufficient evidence to trust the claims.
Greenwashing fraud is endemic | We need to explicitly identify greenwashing fraud vectors and how to solve them – including product substation, mass balance, etc. In particular in CRM, suppliers have taken the approach of inserting a middleman and obscuring the traceability to the source.  A goal of this approach must be the traceability of claims back to the point of extraction, as required by the OECD due diligence handbook.
Cost | The solution must be cheap enough that there remains plentiful margin incentive for producers and manufacturers to change behaviour.

### Scope 

Digital Interoperability standards for scalable traceability & transparency

* Supply chain events
* Entity, product, process, time & location identifiers
* Credential schema
* Privacy & security controls
* Linked data vocabularies

# NOTE: from here down has not been updated as of Oct 30th 2023.  Updates are expected by Nov 21st 2023.
 
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

